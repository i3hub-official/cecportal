"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  User,
  Calendar,
  Phone,
  CheckCircle,
  Upload,
  BookOpen,
  Loader,
  User2Icon,
  CreditCard,
  LocationEdit,
} from "lucide-react";
import { allSubjects } from "@/app/(auth)/enrol/(component)/data/Subjects";
import { ExaminationResources } from "@/app/(auth)/enrol/(component)/components/ExaminationResouces";

// Cache for LGAs to avoid repeated API calls
const lgaCache = new Map<string, string[]>();

export default function CandidateRegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    surname: "",
    firstName: "",
    otherName: "",
    dateOfBirth: "",
    gender: "",
    state: "",
    lga: "",
    nin: "",
    phoneNumber: "",
    disability: "",
    passport: null as File | null,

    // Subject Selection
    subjects: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passportPreview, setPassportPreview] = useState<string | null>(null);
  const [states, setStates] = useState<string[]>([]);
  const [lgas, setLgas] = useState<string[]>([]);
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingLgas, setIsLoadingLgas] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Load saved form data on component mount
  useEffect(() => {
    const savedFormData = sessionStorage.getItem("candidateFormData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }

    const savedPassportPreview = sessionStorage.getItem("passportPreview");
    if (savedPassportPreview) {
      setPassportPreview(savedPassportPreview);
    }
  }, []);

  // Save form data to session storage on changes
  useEffect(() => {
    sessionStorage.setItem("candidateFormData", JSON.stringify(formData));
  }, [formData]);

  // Save passport preview to session storage
  useEffect(() => {
    if (passportPreview) {
      sessionStorage.setItem("passportPreview", passportPreview);
    }
  }, [passportPreview]);

  //   Set subjects
  useEffect(() => {
    // Ensure all subjects are always preselected
    setFormData((prev) => ({
      ...prev,
      subjects: allSubjects,
    }));
  }, []);

  // Fetch states data on component mount
  useEffect(() => {
    const fetchStatesData = async () => {
      setIsLoadingStates(true);
      setApiError(null);
      try {
        const cached = sessionStorage.getItem("cachedStates");
        if (cached) {
          setStates(JSON.parse(cached));
          return;
        }

        const res = await fetch("https://apinigeria.vercel.app/api/v1/states");
        if (!res.ok) {
          throw new Error("Failed to fetch states");
        }

        const data = await res.json();
        const statesList = data.states || [];
        setStates(statesList);
        sessionStorage.setItem("cachedStates", JSON.stringify(statesList));
      } catch (error) {
        console.error("Failed to load states");
        setApiError("Failed to load states data. Please try again later.");
      } finally {
        setIsLoadingStates(false);
      }
    };

    fetchStatesData();
  }, []);

  // Fetch LGAs when state changes
  useEffect(() => {
    const fetchLgasData = async () => {
      if (!formData.state) {
        setLgas([]);
        return;
      }

      if (lgaCache.has(formData.state)) {
        setLgas(lgaCache.get(formData.state) || []);
        return;
      }

      setIsLoadingLgas(true);
      setApiError(null);
      try {
        const res = await fetch(
          `https://apinigeria.vercel.app/api/v1/lga?state=${encodeURIComponent(
            formData.state
          )}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch LGAs");
        }

        const data = await res.json();
        const lgasList = data.lgas || [];
        setLgas(lgasList);
        lgaCache.set(formData.state, lgasList);
      } catch (error) {
        console.error("Failed to load LGAs");
        setApiError("Failed to load LGAs data. Please try again later.");
      } finally {
        setIsLoadingLgas(false);
      }
    };

    fetchLgasData();
  }, [formData.state]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear API error when user interacts with form
    if (apiError) {
      setApiError(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type and size
      if (!file.type.startsWith("image/")) {
        setErrors({ passport: "Please upload an image file" });
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        setErrors({ passport: "File size must be less than 2MB" });
        return;
      }

      setFormData((prev) => ({
        ...prev,
        passport: file,
      }));

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPassportPreview(result);
        sessionStorage.setItem("passportPreview", result);
      };
      reader.readAsDataURL(file);

      setErrors((prev) => ({ ...prev, passport: "" }));
    }
  };

  const handleSubjectToggle = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }));
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.lga) newErrors.lga = "LGA is required";
    if (!formData.nin) newErrors.nin = "NIN is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.passport)
      newErrors.passport = "Passport photograph is required";

    // Validate phone number format
    if (
      formData.phoneNumber &&
      !/^(\+234|0)[789][01]\d{8}$/.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = "Please enter a valid Nigerian phone number";
    }

    // Validate NIN format (basic validation)
    if (formData.nin && formData.nin.length !== 11) {
      newErrors.nin = "NIN must be 11 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (formData.subjects.length < 5) {
      newErrors.subjects = "Select at least 5 subjects";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateStep2()) {
      setIsSubmitting(true);

      // Clear form data from session storage on successful submission
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(3); // Success step
        sessionStorage.removeItem("candidateFormData");
        sessionStorage.removeItem("passportPreview");
      }, 2000);
    }
  };

  const showValidationSummary = Object.keys(errors).length > 0;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <User className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Personal Information Required
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Please provide accurate personal information as it appears
                      on your official documents. All fields marked with * are
                      required.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {apiError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-700">{apiError}</p>
              </div>
            )}

            {showValidationSummary && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-medium text-red-800 mb-2">
                  Please fix the following errors:
                </h3>
                <ul className="text-sm text-red-700 list-disc list-inside">
                  {Object.entries(errors).map(([field, error]) => (
                    <li key={field}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Surname *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.surname ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Enter your surname"
                  />
                </div>
                {errors.surname && (
                  <p className="mt-1 text-sm text-red-500">{errors.surname}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.firstName ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Enter your first name"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Other Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="text"
                    name="otherName"
                    value={formData.otherName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter other names (optional)"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Date of Birth *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.dateOfBirth ? "border-red-500" : "border-border"
                    }`}
                    placeholder="09/11/2025"
                  />
                </div>
                {errors.dateOfBirth && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Gender *
                </label>
                <div className="relative">
                  <User2Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.gender ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                {errors.gender && (
                  <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Disability
                </label>
                <div className="relative">
                  <User2Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <select
                    name="disability"
                    value={formData.disability}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">No disability</option>
                    <option value="Visual">Visual impairment</option>
                    <option value="Hearing">Hearing impairment</option>
                    <option value="Physical">Physical disability</option>
                    <option value="Learning">Learning disability</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  State *
                </label>
                <div className="relative">
                  <LocationEdit className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.state ? "border-red-500" : "border-border"
                    }`}
                    disabled={isLoadingStates}
                  >
                    <option value="">Select state</option>
                    {isLoadingStates ? (
                      <option value="" disabled>
                        Loading states...
                      </option>
                    ) : (
                      states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                {errors.state && (
                  <p className="mt-1 text-sm text-red-500">{errors.state}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  LGA *
                </label>
                <div className="relative">
                  <LocationEdit className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <select
                    name="lga"
                    value={formData.lga}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.lga ? "border-red-500" : "border-border"
                    }`}
                    disabled={!formData.state || isLoadingLgas}
                  >
                    <option value="">Select LGA</option>
                    {isLoadingLgas ? (
                      <option value="" disabled>
                        Loading LGAs...
                      </option>
                    ) : (
                      lgas.map((lga) => (
                        <option key={lga} value={lga}>
                          {lga}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                {errors.lga && (
                  <p className="mt-1 text-sm text-red-500">{errors.lga}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  NIN *
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="tel"
                    name="nin"
                    value={formData.nin}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.nin ? "border-red-500" : "border-border"
                    }`}
                    placeholder="11-digit NIN"
                    maxLength={11}
                  />
                </div>
                {errors.nin && (
                  <p className="mt-1 text-sm text-red-500">{errors.nin}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.phoneNumber ? "border-red-500" : "border-border"
                    }`}
                    placeholder="0800 123 4567"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Passport Photograph *
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="passport-upload"
                  />
                  <label
                    htmlFor="passport-upload"
                    className="cursor-pointer block"
                  >
                    {passportPreview ? (
                      <>
                        <Image
                          src={passportPreview}
                          alt="Passport preview"
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-full object-cover mb-2 mx-auto"
                        />
                        <span className="text-sm text-primary">
                          Change photo
                        </span>
                      </>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="w-8 h-8 text-foreground/30 mb-2" />
                        <span className="text-sm text-foreground/70">
                          Click to upload passport photo
                        </span>
                        <span className="text-xs text-foreground/50">
                          Max 2MB, JPG/PNG
                        </span>
                      </div>
                    )}
                  </label>
                </div>
                {errors.passport && (
                  <p className="mt-1 text-sm text-red-500">{errors.passport}</p>
                )}
              </div>
            </div>

            <button
              onClick={() => {
                if (validateStep1()) setStep(2);
              }}
              className="w-full bg-primary text-white py-4 px-6 rounded-lg font-medium hover:bg-primary/90 transition flex items-center justify-center"
            >
              Continue to Subject Selection
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            {/* Info Section */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Subject Selection
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>
                      All subjects have been pre-selected for your examination.
                      Review the list below.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Error */}
            {errors.subjects && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-700">{errors.subjects}</p>
              </div>
            )}

            {/* Subject List - Readonly */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[26rem] overflow-y-auto">
              {allSubjects.map((subject) => (
                <div
                  key={subject}
                  className="w-full p-3 sm:p-4 border rounded-lg text-xs sm:text-sm font-medium bg-primary/10 border-primary text-primary cursor-not-allowed"
                >
                  {subject}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Complete Registration"
                )}
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center py-8">
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Registration Successful!
            </h2>
            <p className="text-foreground/70 mb-6 max-w-md mx-auto">
              Your examination registration has been completed successfully.
            </p>

            {/* Candidate Info Card */}
            <div className="max-w-md mx-auto bg-card border border-border rounded-xl shadow-sm p-6 text-left space-y-4">
              {/* Candidate Photo */}
              <div className="flex justify-center">
                {passportPreview ? (
                  <Image
                    src={passportPreview}
                    alt="Candidate Photo"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover border"
                  />
                ) : (
                  <Image
                    src="/default-avatar.png"
                    alt="Default Avatar"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover border"
                  />
                )}
              </div>

              {/* Details */}
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Full Name:</span>{" "}
                  {`${formData.surname} ${formData.firstName} ${formData.otherName || ""}`.trim()}
                </p>
                <p>
                  <span className="font-semibold">Date of Birth:</span>{" "}
                  {formData.dateOfBirth || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span>{" "}
                  {formData.gender || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Registration No:</span>{" "}
                  <strong>
                    CEC-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </strong>
                </p>
                <p>
                  <span className="font-semibold">Seat Number:</span>{" "}
                  {Math.floor(1000 + Math.random() * 9000)}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 max-w-xs mx-auto mt-8">
              <button
                onClick={() => window.print()}
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Print Registration Slip
              </button>
              <Link
                href="/enrol"
                className="block w-full border border-primary text-primary py-3 rounded-lg font-medium hover:bg-primary/10 transition"
              >
                Register Another Candidate
              </Link>
            </div>
          </div>
        );

      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-4 pb-10 px-4 sm:pt-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return to the Dashboard
        </Link>

        <div className="bg-card rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Examination Registration
            </h1>
            <p className="text-foreground/70">
              Register for the Catholic Education Commission Mock Examinations
            </p>

            {/* Progress indicator */}
            <div className="mt-6">
              <div className="flex items-center">
                {[1, 2, 3].map((i) => (
                  <React.Fragment key={i}>
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        i < step
                          ? "bg-green-500 text-white"
                          : i === step
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-primary/50"
                      }`}
                    >
                      {i < step ? <CheckCircle className="w-5 h-5" /> : i}
                    </div>
                    {i < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          i < step ? "bg-green-500" : "bg-gray-200"
                        }`}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-foreground/60">
                <span>Personal Info</span>
                <span>Subjects</span>
                <span>Complete</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {renderStep()}
          </form>
        </div>

        {/* Examination Resources */}
        <ExaminationResources />
      </div>
    </div>
  );
}
