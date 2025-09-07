"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  FileText,
  Users,
  Award,
  Clock,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Check,
  UserCheck,
  Shield,
  Bookmark,
} from "lucide-react";

export default function ExamRegistrationLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Chinwe O.",
      role: "SS3 Student",
      text: "The registration process was so straightforward. I completed everything in just 10 minutes!",
    },
    {
      name: "Fr. Michael A.",
      role: "School Administrator",
      text: "This system has simplified our exam preparation process tremendously. Highly recommended!",
    },
    {
      name: "Mrs. Okoro K.",
      role: "Parent",
      text: "I appreciate how easy it was to register my twins for their mock exams. The confirmation system is excellent.",
    },
  ];

  const features = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Easy Registration",
      description:
        "Simple step-by-step process to register students for mock examinations",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure System",
      description:
        "Protected student data with Catholic Education Commission standards",
    },
    {
      icon: <Bookmark className="w-6 h-6" />,
      title: "Track Progress",
      description: "Monitor registration status and exam preparation materials",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Get insights on student performance after exam completion",
    },
  ];

  const examSubjects = [
    "English Language",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Economics",
    "Literature in English",
    "Government",
    "Commerce",
    "Accounting",
    "Christian Religious Studies",
    "Geography",
    "Further Mathematics",
    "Agricultural Science",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="bg-card py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl">CEC Okigwe</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-primary transition">
              Home
            </a>
            <a href="#registration" className="hover:text-primary transition">
              Registration
            </a>
            <a href="#subjects" className="hover:text-primary transition">
              Subjects
            </a>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </nav>

          <div className="flex gap-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded-md hover:bg-accent transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Mock Examination Registration
                <span className="text-primary block">
                  Catholic Education Commission
                </span>
              </h1>
              <p className="text-lg text-foreground/70 mb-10">
                Register for the upcoming diocesan mock examinations. Open to
                all Catholic schools in Okigwe Diocese, Imo State.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/registration"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="#instructions"
                  className="px-8 py-4 rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  View Instructions
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/10 w-full h-64 rounded-lg blur-3xl"></div>
              </div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Exam Registration</h2>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Exam Dates</h3>
                      <p className="text-sm text-foreground/70">
                        15th - 26th April, 2024
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Registration Deadline</h3>
                      <p className="text-sm text-foreground/70">
                        5th April, 2024
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">For Students</h3>
                      <p className="text-sm text-foreground/70">
                        SS1 - SS3 Classes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Link
                    href="/registration"
                    className="block w-full bg-primary text-white text-center py-3 rounded-lg font-medium hover:bg-primary/90 transition"
                  >
                    Begin Registration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">42</div>
              <div className="text-foreground/70 mt-2">Schools Registered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-foreground/70 mt-2">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">14</div>
              <div className="text-foreground/70 mt-2">Subjects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-foreground/70 mt-2">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Register With Us
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our platform provides a seamless experience for students, parents,
              and school administrators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center group hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Available Subjects
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Comprehensive coverage of WAEC and NECO examination subjects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {examSubjects.map((subject, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 text-center hover:shadow-md transition"
              >
                <div className="text-sm font-medium">{subject}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/subjects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all subjects and syllabus <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section
        id="instructions"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How To Register
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Follow these simple steps to complete your mock exam registration
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              step="01"
              title="Create Account"
              description="Sign up with your email and school details"
              icon={<UserCheck className="w-8 h-8" />}
            />
            <ProcessStep
              step="02"
              title="Select Subjects"
              description="Choose the subjects you want to register for"
              icon={<BookOpen className="w-8 h-8" />}
            />
            <ProcessStep
              step="03"
              title="Make Payment"
              description="Pay securely through our online payment system"
              icon={<FileText className="w-8 h-8" />}
            />
            <ProcessStep
              step="04"
              title="Get Confirmation"
              description="Receive your exam slip and registration confirmation"
              icon={<CheckCircle className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What People Are Saying
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Feedback from students, parents, and school administrators
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-lg text-foreground mb-6 italic">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </p>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full hover:bg-background"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentTestimonial
                        ? "bg-primary"
                        : "bg-foreground/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-background"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Have questions? Reach out to the Catholic Education Commission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-foreground/70">+234 803 456 7890</p>
              <p className="text-foreground/70">+234 802 123 4567</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-foreground/70">cec.okigwe@catholic.org.ng</p>
              <p className="text-foreground/70">exams@cecokigwe.org</p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-foreground/70">
                Catholic Education Commission
              </p>
              <p className="text-foreground/70">
                Okigwe Diocese, Imo State, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Register for Your Mock Exams?
          </h2>
          <p className="text-foreground/70 mb-10 max-w-2xl mx-auto">
            Join thousands of students preparing for their examinations with our
            comprehensive mock tests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>

            <Link href="#contact">
              <button className="px-8 py-4 rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition flex items-center justify-center gap-2">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">CEC Okigwe</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Catholic Education Commission, Okigwe Diocese, Imo State, Nigeria
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="hover:text-primary transition"
                >
                  Registration
                </a>
              </li>
              <li>
                <a href="#subjects" className="hover:text-primary transition">
                  Subjects
                </a>
              </li>
              <li>
                <a
                  href="#instructions"
                  className="hover:text-primary transition"
                >
                  How to Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Exam Syllabus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Past Questions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Study Materials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-sm text-foreground/70">
          <p>
            © 2024 Catholic Education Commission, Okigwe Diocese. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

type ProcessStepProps = {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

function ProcessStep({ step, title, description, icon }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
        {icon}
      </div>
      <div className="text-primary font-bold text-lg mb-2">{step}</div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
}
