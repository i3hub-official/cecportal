"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import VerificationInput from "./components/VerificationInput";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    token: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isTokenVerified, setIsTokenVerified] = useState(false);

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

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleTokenChange = (token: string) => {
    setFormData((prev) => ({
      ...prev,
      token,
    }));

    if (errors.token) {
      setErrors((prev) => ({
        ...prev,
        token: "",
      }));
    }
  };

  // ✅ Auto-submit once token reaches exactly 6 digits
  useEffect(() => {
    if (
      formData.token.trim().length === 6 &&
      !isTokenVerified &&
      !isSubmitting
    ) {
      verifyTokenLogic();
    }
  }, [formData.token, isTokenVerified, isSubmitting]);

  const validateEmail = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateToken = () => {
    const newErrors: Record<string, string> = {};
    const token = formData.token.trim();

    if (!token) {
      newErrors.token = "Verification token is required";
    } else if (token.length !== 6) {
      newErrors.token = "Token must be exactly 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendToken = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateEmail()) {
      setIsSubmitting(true);

      // Simulate API call to send token
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(2);
        startCountdown(120);
      }, 1500);
    }
  };

  const verifyTokenLogic = () => {
    if (validateToken()) {
      setIsSubmitting(true);

      // Simulate API call to verify token
      setTimeout(() => {
        setIsSubmitting(false);
        setIsTokenVerified(true);

        // Move to next step after a brief delay
        setTimeout(() => setStep(3), 1000);
      }, 1500);
    }
  };

  const handleVerifyToken = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    verifyTokenLogic();
  };

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validatePassword()) {
      setIsSubmitting(true);

      // Simulate API call to reset password
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4);
      }, 1500);
    }
  };

  const startCountdown = (seconds: number) => {
    setCountdown(seconds);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resendToken = () => {
    if (countdown > 0) return;

    setIsSubmitting(true);

    // Simulate API call to resend token
    setTimeout(() => {
      setIsSubmitting(false);
      setIsTokenVerified(false);
      setFormData((prev) => ({ ...prev, token: "" }));
      startCountdown(120);
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Reset your password
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Enter your school&apos;s email address and we&apos;ll send
                      you a verification token to reset your password.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                School Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-border"
                  }`}
                  placeholder="school@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <button
              onClick={() =>
                handleSendToken({
                  preventDefault: () => {},
                } as React.FormEvent<HTMLFormElement>)
              }
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending token...
                </>
              ) : (
                "Send Verification Token"
              )}
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Check your email
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      We&apos;ve sent a 6-digit verification token to{" "}
                      <strong>{formData.email}</strong>. Enter it below to reset
                      your password.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Verification Token *
              </label>
              <VerificationInput
                value={formData.token}
                onChange={handleTokenChange}
                verified={isTokenVerified}
              />
              {errors.token && (
                <p className="mt-2 text-sm text-red-500 text-center">
                  {errors.token}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/70">
                {countdown > 0
                  ? `Resend token in ${formatTime(countdown)}`
                  : "Didn't receive the token?"}
              </span>
              <button
                type="button"
                onClick={resendToken}
                disabled={countdown > 0 || isSubmitting}
                className="text-primary font-medium hover:text-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Resend Token
              </button>
            </div>

            <button
              onClick={() => verifyTokenLogic()}
              disabled={isSubmitting || formData.token.length !== 6}
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Verifying...
                </>
              ) : (
                "Verify Token"
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep(1);
                setIsTokenVerified(false);
                setFormData((prev) => ({ ...prev, token: "" }));
              }}
              className="w-full border border-primary text-primary py-3 px-4 rounded-lg font-medium hover:bg-primary/10 transition"
            >
              Back to Email Entry
            </button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Token Verified Successfully
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Please create a new password for your school account.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                New Password *
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
                  placeholder="Enter new password"
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
              <p className="mt-1 text-xs text-foreground/60">
                Password must be at least 8 characters long.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm New Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.confirmPassword ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Confirm new password"
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

            <form onSubmit={handleResetPassword}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Resetting password...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          </div>
        );

      case 4:
        return (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Password Reset Successful!
            </h2>
            <p className="text-foreground/70 mb-6">
              Your school account password has been successfully reset. You can
              now log in with your new password.
            </p>
            <div className="space-y-4">
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
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link
            href="/login"
            className="inline-flex items-center text-primary hover:underline mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Login
          </Link>

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="mt-2 text-3xl font-bold text-center text-foreground">
            {step === 1
              ? "Reset Password"
              : step === 2
                ? "Verify Token"
                : step === 3
                  ? "Create New Password"
                  : "Password Reset"}
          </h2>
          <p className="mt-2 text-sm text-center text-foreground/70">
            {step === 1
              ? "Enter your school email to receive a verification token"
              : step === 2
                ? "Enter the 6-digit token sent to your email"
                : step === 3
                  ? "Create a strong new password for your account"
                  : "Your password has been successfully reset"}
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-lg p-6">{renderStep()}</div>

        <div className="text-center text-sm text-foreground/60">
          <p>
            Need help? Contact the CEC support team at{" "}
            <a
              href="mailto:support@cecokigwe.org"
              className="text-primary hover:underline"
            >
              support@cecokigwe.org
            </a>{" "}
            or call{" "}
            <a
              href="tel:+2348034567890"
              className="text-primary hover:underline"
            >
              +234 803 456 7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
