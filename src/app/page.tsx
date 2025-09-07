"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  Zap,
  CheckCircle,
  FileText,
  Users,
  Download,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Check,
  Vote,
  Globe,
  Car,
  Phone,
  Globe2,
} from "lucide-react";

export default function GovLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah O.",
      role: "Business Owner",
      text: "Fast and reliable NIN verification. Saved me hours of paperwork!",
    },
    {
      name: "David M.",
      role: "HR Manager",
      text: "The bulk verification feature is a game-changer for our recruitment process.",
    },
    {
      name: "Amina K.",
      role: "Freelancer",
      text: "Simple interface and instant results. Highly recommended!",
    },
  ];

  const services = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "NIN Verification",
      description:
        "Verify NIN records using phone, email, tracking ID, or demographics.",
      features: [
        "Multiple verification methods",
        "Real-time results",
        "Secure process",
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "BVN Verification",
      description:
        "Fast and accurate BVN lookup and validation for banks and fintechs.",
      features: [
        "Bank-grade security",
        "Instant validation",
        "Compliance guaranteed",
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "SIM Verification",
      description:
        "Check if a SIM card is properly linked to a NIN (read-only, no updates).",
      features: ["Ensure number validity", "Prevent fraud", "Telco compliance"],
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Driver's License Verification",
      description: "Verify identity using the FRSC driver's license database.",
      features: [
        "Instant verification",
        "FRSC integration",
        "Road safety compliance",
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Passport Verification",
      description:
        "Validate international passports using MRZ or passport numbers.",
      features: ["Global coverage", "Instant validation", "Travel compliance"],
    },
    {
      icon: <Vote className="w-6 h-6" />,
      title: "Voter's Card Verification",
      description:
        "Check INEC voter ID validity and confirm eligibility (18+).",
      features: [
        "INEC database integration",
        "Age eligibility check",
        "Electoral compliance",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tax ID (TIN) Verification",
      description: "Validate tax identification numbers via FIRS records.",
      features: [
        "Business compliance",
        "Fraud prevention",
        "Secure validation",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "NHIS Verification",
      description: "Verify health insurance enrollment (NHIS/NHIA).",
      features: [
        "Healthcare compliance",
        "Patient ID confirmation",
        "Secure validation",
      ],
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "International Verification",
      description: "Cross-border KYC and identity matching services.",
      features: [
        "Multi-country support",
        "Fraud detection",
        "Global compliance",
      ],
    },
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
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Secure <span className="text-primary">Identity Verification</span>
              <br /> Made Simple
            </h1>
            <p className="text-lg text-foreground/70 mb-10 max-w-3xl mx-auto">
              Verify and manage identities with government-compliant security.
              Reliable, fast, and trusted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                className="px-8 py-4 rounded-lg font-semibold hover:bg-card hover:text-primary transition flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Verification Services Section */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/10 w-full h-64 rounded-lg blur-3xl"></div>
            </div>
            <div className="relative bg-card rounded-2xl p-8 shadow-lg max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Verification Services</h2>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {service.icon}
                      <span className="text-sm font-medium">
                        {service.title}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/60">
                      {service.description}
                    </p>
                  </div>
                ))}
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
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-foreground/70 mt-2">Verified Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-foreground/70 mt-2">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-foreground/70 mt-2">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5min</div>
              <div className="text-foreground/70 mt-2">Avg. Verification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Comprehensive identity verification solutions tailored to your
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Simple, secure, and lightning-fast verification process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              step="01"
              title="Submit Request"
              description="Provide your NIN, BVN, or ID details through our secure portal."
              icon={<FileText className="w-8 h-8" />}
            />
            <ProcessStep
              step="02"
              title="Secure Processing"
              description="We process your request with trusted government providers."
              icon={<Shield className="w-8 h-8" />}
            />
            <ProcessStep
              step="03"
              title="Get Results"
              description="Verify records instantly with real-time updates."
              icon={<Download className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Trusted by individuals and businesses across the country
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
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
                className="p-2 rounded-full hover:bg-card"
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
                className="p-2 rounded-full hover:bg-card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-foreground/70 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust our verification
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <button className="bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition">
                Explore API Documentation
              </button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
            <Link href="#">
              <button className="px-8 py-4 rounded-lg font-semibold hover:bg-card hover:text-primary transition">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 group hover:shadow-lg transition">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-foreground/70"
          >
            <Check className="w-4 h-4 text-primary" /> {feature}
          </li>
        ))}
      </ul>
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
      <div className="w-8 h-1 bg-primary mx-auto mb-4"></div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">
        {step}. {title}
      </h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
}
