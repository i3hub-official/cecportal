"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  School,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  FileText,
  Download,
  User,
  Search,
  ClipboardList,
} from "lucide-react";

export default function SchoolRegistrationPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Center number verification
    centerNumber: "",

    // Step 2: School information (pre-filled from verification)
    centerName: "",
    state: "Imo",
    lga: "",
    schoolEmail: "",
    schoolPhone: "",
    schoolAddress: "",

    // Step 3: Administrator information
    adminName: "",
    adminEmail: "",
    adminPhone: "",
    password: "",
    confirmPassword: "",

    // Additional information
    schoolType: "",
    principalName: "",
    principalPhone: "",
    examOfficerPhone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // Mock database of schools (in a real app, this would be an API call)
  const schoolDatabase = [
    {
      centerNumber: "415001",
      centerName: "Holy Trinity Secondary School",
      state: "Imo",
      lga: "Okigwe",
    },
    {
      centerNumber: "415002",
      centerName: "St. Mary's College",
      state: "Imo",
      lga: "Okigwe",
    },
    {
      centerNumber: "415003",
      centerName: "Divine Mercy Academy",
      state: "Imo",
      lga: "Owerri North",
    },
    {
      centerNumber: "415004",
      centerName: "Christ the King College",
      state: "Imo",
      lga: "Owerri Municipal",
    },
    {
      centerNumber: "415005",
      centerName: "St. Joseph's Seminary",
      state: "Imo",
      lga: "Orlu",
    },
  ];

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
  };

  const verifyCenterNumber = () => {
    if (!formData.centerNumber) {
      setErrors({ centerNumber: "Center number is required" });
      return;
    }

    // Simulate API verification
    const school = schoolDatabase.find(
      (school) => school.centerNumber === formData.centerNumber
    );

    if (school) {
      // Pre-fill the form with school data
      setFormData((prev) => ({
        ...prev,
        centerName: school.centerName,
        state: school.state,
        lga: school.lga,
      }));
      setIsVerified(true);
      setErrors({});
      setStep(2);
    } else {
      setErrors({
        centerNumber: "Invalid center number. Please check and try again.",
      });
    }
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.schoolEmail)
      newErrors.schoolEmail = "School email is required";
    if (!formData.schoolPhone)
      newErrors.schoolPhone = "School phone is required";
    if (!formData.schoolAddress)
      newErrors.schoolAddress = "School address is required";
    if (!formData.schoolType) newErrors.schoolType = "School type is required";
    if (!formData.principalName)
      newErrors.principalName = "Principal name is required";
    if (!formData.principalPhone)
      newErrors.principalPhone = "Principal phone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.adminName) newErrors.adminName = "Admin name is required";
    if (!formData.adminEmail) newErrors.adminEmail = "Admin email is required";
    if (!formData.adminPhone) newErrors.adminPhone = "Admin phone is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateStep3()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4); // Success step
      }, 2000);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ClipboardList className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Center Number Required
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Please enter your school&apos;s center number assigned by
                      the Catholic Education Commission. If you don&apos;t know
                      your center number, please contact the CEC office.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Center Number *
              </label>
              <div className="relative">
                <School className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                <input
                  type="tel"
                  name="centerNumber"
                  value={formData.centerNumber}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.centerNumber ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Enter your center number (ex. CEC000123...)"
                />
              </div>
              {errors.centerNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.centerNumber}
                </p>
              )}
            </div>

            <button
              onClick={verifyCenterNumber}
              className="w-full bg-primary text-white py-4 px-6 rounded-lg font-medium hover:bg-primary/90 transition flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Verify Center Number
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Center Verified Successfully
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>
                      Center Number: <strong>{formData.centerNumber}</strong>
                      <br />
                      Center: <strong>{formData.centerName}</strong>
                      <br />
                      State: <strong>{formData.state}</strong>, LGA:{" "}
                      <strong>{formData.lga}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Center Name
                </label>
                <input
                  type="text"
                  value={formData.centerName}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-gray-100"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  State
                </label>
                <input
                  type="text"
                  value={formData.state}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-gray-100"
                  readOnly
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  LGA
                </label>
                <input
                  type="text"
                  value={formData.lga}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-gray-100"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  School Type *
                </label>
                <select
                  name="schoolType"
                  value={formData.schoolType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.schoolType ? "border-red-500" : "border-border"
                  }`}
                >
                  <option value="">Select school type</option>
                  <option value="Secondary">Senior Secondary School</option>
                  <option value="Seminary">Seminary School</option>
                </select>
                {errors.schoolType && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.schoolType}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  School Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="email"
                    name="schoolEmail"
                    value={formData.schoolEmail}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.schoolEmail ? "border-red-500" : "border-border"
                    }`}
                    placeholder="school@example.com"
                  />
                </div>
                {errors.schoolEmail && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.schoolEmail}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  School Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="tel"
                    name="schoolPhone"
                    value={formData.schoolPhone}
                    onChange={handleInputChange}
                    min={11}
                    max={11}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.schoolPhone ? "border-red-500" : "border-border"
                    }`}
                    placeholder="+234 800 123 4567"
                  />
                </div>
                {errors.schoolPhone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.schoolPhone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                School Address *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-foreground/30 w-5 h-5" />
                <textarea
                  name="schoolAddress"
                  value={formData.schoolAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.schoolAddress ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Enter complete school address"
                />
              </div>
              {errors.schoolAddress && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.schoolAddress}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Principal&apos;s Name *
                </label>
                <input
                  type="text"
                  name="principalName"
                  value={formData.principalName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.principalName ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Enter principal's full name"
                />
                {errors.principalName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.principalName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Principal&apos;s Phone Number *
                </label>
                <input
                  type="number"
                  name="principalPhone"
                  value={formData.principalPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+234 800 123 4567"
                  min={11}
                  max={11}
                />
                {errors.principalPhone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.principalPhone}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => {
                  if (validateStep2()) setStep(3);
                }}
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Continue to Admin Details
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground mb-2">
              Administrator Information
            </h3>
            <p className="text-foreground/70 mb-6">
              Please provide details for the primary administrator who will
              manage exam registrations.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="text"
                    name="adminName"
                    value={formData.adminName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.adminName ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Enter administrator's full name"
                  />
                </div>
                {errors.adminName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.adminName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type="email"
                    name="adminEmail"
                    value={formData.adminEmail}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.adminEmail ? "border-red-500" : "border-border"
                    }`}
                    placeholder="admin@example.com"
                  />
                </div>
                {errors.adminEmail && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.adminEmail}
                  </p>
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
                    name="adminPhone"
                    value={formData.adminPhone}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.adminPhone ? "border-red-500" : "border-border"
                    }`}
                    placeholder="+234 800 123 4567"
                  />
                </div>
                {errors.adminPhone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.adminPhone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.password ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/30 hover:text-foreground/60"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-border"
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/30 hover:text-foreground/60"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  required
                  className="rounded text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground/70">
                  By creating an account, you agree to our{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Complete Registration"}
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Registration Successful!
            </h2>
            <p className="text-foreground/70 mb-6 max-w-md mx-auto">
              Your school account has been created successfully. You can now log
              in to manage student registrations for the mock examinations.
            </p>
            <div className="space-y-4 max-w-xs mx-auto">
              <Link
                href="/login"
                className="block w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Proceed to Login
              </Link>
              <Link
                href="/"
                className="block w-full border border-primary text-primary py-3 rounded-lg font-medium hover:bg-primary/10 transition"
              >
                Return to Home
              </Link>
            </div>
          </div>
        );

      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-card rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              School Registration
            </h1>
            <p className="text-foreground/70">
              Register your school for the Catholic Education Commission Mock
              Examinations
            </p>

            {/* Progress indicator */}
            <div className="mt-6">
              <div className="flex items-center">
                {[1, 2, 3, 4].map((i) => (
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
                    {i < 4 && (
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
                <span>Verify Center</span>
                <span>School Info</span>
                <span>Admin Info</span>
                <span>Complete</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {renderStep()}
          </form>
        </div>

        <div className="mt-8 bg-card rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-medium text-foreground mb-4 flex items-center">
            <Download className="w-5 h-5 mr-2 text-primary" />
            Registration Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="#"
              className="flex items-center p-4 border border-border rounded-lg hover:bg-primary/5 transition"
            >
              <FileText className="w-6 h-6 text-primary mr-3" />
              <div>
                <p className="font-medium">School Registration Guide</p>
                <p className="text-sm text-foreground/70">PDF, 1.5MB</p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center p-4 border border-border rounded-lg hover:bg-primary/5 transition"
            >
              <FileText className="w-6 h-6 text-primary mr-3" />
              <div>
                <p className="font-medium">Examination Regulations</p>
                <p className="text-sm text-foreground/70">PDF, 2.1MB</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
