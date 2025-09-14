import { NextRequest, NextResponse } from "next/server";
import {
  PrismaClient,
  Gender,
  Disability,
  RegistrationStatus,
} from "@prisma/client";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

// Configure maximum file size (2MB)
export const config = {
  api: {
    bodyParser: false,
  },
  maxDuration: 30,
};

// Helper function to parse form data
async function parseFormData(request: NextRequest) {
  const formData = await request.formData();
  return formData;
}

// Helper function to validate NIN format
function validateNIN(nin: string): boolean {
  return /^\d{11}$/.test(nin.replace(/\s/g, ""));
}

// Helper function to validate phone number format
function validatePhoneNumber(phone: string): boolean {
  return /^(\+234|0)[789][01]\d{8}$/.test(phone.replace(/\s/g, ""));
}

// Helper function to validate age (at least 16 years old)
function validateAge(dateOfBirth: string): boolean {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age >= 16;
}

// Helper function to map string gender to enum
function mapGender(gender: string): Gender {
  switch (gender.toLowerCase()) {
    case "male":
      return Gender.Male;
    case "female":
      return Gender.Female;
    default:
      throw new Error(`Invalid gender value: ${gender}`);
  }
}

// Helper function to map string disability to enum
function mapDisability(disability: string): Disability | null {
  if (!disability || disability === "None") return null;

  switch (disability.toLowerCase()) {
    case "no disability":
      return Disability.None;
    case "visual":
      return Disability.Visual;
    case "hearing":
      return Disability.Hearing;
    case "physical":
      return Disability.Physical;
    case "learning":
      return Disability.Learning;
    case "other":
      return Disability.Other;
    default:
      throw new Error(`Invalid disability value: ${disability}`);
  }
}

// Helper function to save uploaded file
async function savePassportPhoto(
  file: File,
  candidateId: string
): Promise<string> {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const fileExtension = file.name.split(".").pop() || "jpg";
    const fileName = `${candidateId}-${uuidv4()}.${fileExtension}`;

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), "public", "uploads", "passports");
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (err) {
      console.error("Error creating uploads directory:", err);
      throw new Error("Failed to create upload directory");
    }

    // Write file
    const filePath = join(uploadsDir, fileName);
    await writeFile(filePath, buffer);

    // Return relative path for database storage
    return `/uploads/passports/${fileName}`;
  } catch (error) {
    console.error("Error saving passport photo:", error);
    throw new Error("Failed to save passport photo");
  }
}

// Generate registration number
function generateRegistrationNumber(): string {
  const prefix = "CEC";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substr(2, 3).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await parseFormData(request);

    // Extract form fields
    const surname = formData.get("surname") as string;
    const firstName = formData.get("firstName") as string;
    const otherName = formData.get("otherName") as string;
    const dateOfBirth = formData.get("dateOfBirth") as string;
    const gender = formData.get("gender") as string;
    const state = formData.get("state") as string;
    const lga = formData.get("lga") as string;
    const nin = formData.get("nin") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const disability = (formData.get("disability") as string) || "None";
    const acceptedTerms = formData.get("acceptedTerms") as string;
    const passport = formData.get("passport") as File;

    // Validation errors object
    const errors: Record<string, string> = {};

    // Validate required fields
    if (!surname?.trim()) errors.surname = "Surname is required";
    if (!firstName?.trim()) errors.firstName = "First name is required";
    if (!dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!gender) errors.gender = "Gender is required";
    if (!state) errors.state = "State is required";
    if (!lga) errors.lga = "LGA is required";
    if (!nin?.trim()) errors.nin = "NIN is required";
    if (!phoneNumber?.trim()) errors.phoneNumber = "Phone number is required";
    if (!passport || passport.size === 0)
      errors.passport = "Passport photograph is required";
    if (!acceptedTerms || acceptedTerms !== "true")
      errors.acceptedTerms = "You must accept the terms and conditions";

    // Validate NIN format
    if (nin && !validateNIN(nin)) {
      errors.nin = "NIN must be exactly 11 digits";
    }

    // Validate phone number format
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = "Please enter a valid Nigerian phone number";
    }

    // Validate age
    if (dateOfBirth && !validateAge(dateOfBirth)) {
      errors.dateOfBirth = "You must be at least 16 years old to register";
    }

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Validation failed",
        },
        { status: 400 }
      );
    }

    // Check if candidate with same NIN already exists
    const existingCandidate = await prisma.candidate.findUnique({
      where: { nin: nin.replace(/\s/g, "") },
    });

    if (existingCandidate) {
      return NextResponse.json(
        {
          success: false,
          errors: { nin: "A candidate with this NIN already exists" },
          message: "Duplicate NIN found",
        },
        { status: 409 }
      );
    }

    // Check if candidate with same phone number already exists
    const existingPhoneCandidate = await prisma.candidate.findFirst({
      where: { phoneNumber: phoneNumber.replace(/\s/g, "") },
    });

    if (existingPhoneCandidate) {
      return NextResponse.json(
        {
          success: false,
          errors: {
            phoneNumber: "A candidate with this phone number already exists",
          },
          message: "Duplicate phone number found",
        },
        { status: 409 }
      );
    }

    // For demo purposes - in a real app, you'd get this from the authenticated session
    // You'll need to implement proper authentication for school admins
    const demoSchoolId = "demo-school-id"; // Replace with actual school ID from session
    const demoAdminId = "demo-admin-id"; // Replace with actual admin ID from session

    // Save passport photo
    let passportPhotoUrl = "";
    if (passport && passport.size > 0) {
      const candidateId = `temp-${uuidv4()}`;
      passportPhotoUrl = await savePassportPhoto(passport, candidateId);
    }

    // Generate registration number
    const registrationNumber = generateRegistrationNumber();

    // Map string values to enum values
    const genderEnum = mapGender(gender);
    const disabilityEnum = mapDisability(disability);

    // Create candidate record in database
    const candidate = await prisma.candidate.create({
      data: {
        surname: surname.trim(),
        firstName: firstName.trim(),
        otherName: otherName?.trim() || null,
        dateOfBirth: new Date(dateOfBirth),
        gender: genderEnum,
        nin: nin.replace(/\s/g, ""),
        phoneNumber: phoneNumber.replace(/\s/g, ""),
        disability: disabilityEnum,
        state,
        lga,
        passportPhotoUrl,
        registrationNumber,
        acceptedTerms: acceptedTerms === "true",
        registrationStatus: RegistrationStatus.Submitted,
        schoolId: demoSchoolId,
        createdById: demoAdminId,
        submittedAt: new Date(),
      },
    });

    // Create audit log
    await prisma.candidateAuditLog.create({
      data: {
        candidateId: candidate.id,
        action: "CREATED",
        changes: JSON.stringify({
          registrationNumber: candidate.registrationNumber,
          status: candidate.registrationStatus,
        }),
        performedBy: demoAdminId,
        performedAt: new Date(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Candidate registered successfully",
        data: {
          candidateId: candidate.id,
          registrationNumber: candidate.registrationNumber,
          registrationDate: candidate.submittedAt,
          status: candidate.registrationStatus,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
