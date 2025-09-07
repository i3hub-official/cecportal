"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Menu, X, User, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = saved || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);

    // Handle scroll effect
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-3 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-card border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary select-none">
              CEC eRegistration
            </span>
          </Link>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-3">
                {/* Login button */}
                <Link href="/login">
                  <button className="bg-transparent hover:bg-primary/10 text-foreground font-medium py-2 px-4 rounded-md transition flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </button>
                </Link>

                {/* Register button */}
                <Link href="/register">
                  <button className="bg-primary text-white font-medium py-2 px-5 rounded-md hover:bg-primary/90 transition inline-block">
                    Register
                  </button>
                </Link>
              </div>

              {/* Desktop Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-background text-foreground border-2 border-background
                           hover:bg-background/10 transition-colors focus:outline-none focus:ring-0
                           focus:ring-background focus:ring-offset-0 focus:ring-offset-background"
                  aria-label={
                    theme === "dark"
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  title={
                    theme === "dark"
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>

            {/* Mobile Theme Toggle */}
            {mounted && (
              <div className="md:hidden">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-background text-foreground border-2 border-background 
                           hover:bg-background/10 transition-colors focus:outline-none focus:ring-0 
                           focus:ring-background focus:ring-offset-0 focus:ring-offset-background"
                  aria-label={
                    theme === "dark"
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  title={
                    theme === "dark"
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-4 space-y-2">
              <div className="space-y-2">
                {/* Login button */}
                <Link
                  href="/login"
                  className="flex items-center justify-center text-center bg-transparent hover:bg-primary/10 text-foreground font-medium py-3 px-4 rounded-md transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" /> Login
                </Link>

                {/* Register button */}
                <Link
                  href="/register"
                  className="flex items-center justify-center text-center bg-primary text-white font-medium py-3 px-4 rounded-md hover:bg-primary/90 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" /> Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
