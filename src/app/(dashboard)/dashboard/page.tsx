"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  ClipboardCheck,
  CreditCard,
  School,
  Sun,
  Moon,
  Bell,
  Search,
  User,
  ChevronDown,
  ChevronRight,
  FileText,
  CheckSquare,
  Calendar,
  Shield,
  BookOpen,
  Download,
  Send,
  Settings,
  Printer,
  BarChart3,
} from "lucide-react";
import { sidebarItems } from "../(component)/context/SidebarItems";
import StatCard from "../(component)/component/StatCard";
import RecentActivity from "../(component)/component/RecentActivity";
import QuickLinks from "../(component)/component/QuickLinks";
import QuickLinksX from "../(component)/component/QuickLinksX";
import DeadlineNotice from "../(component)/component/DeadlineNotice";
import TrendInsights from "../(component)/component/TrendsInsights";
import UpcomingEvents from "../(component)/component/UpcomingEvents";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference in localStorage
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) {
        // Use saved theme preference
        const isDarkMode = savedTheme === "dark";
        setDarkMode(isDarkMode);

        if (isDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        // If no saved preference, check system preference
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setDarkMode(systemPrefersDark);

        if (systemPrefersDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        // Save system preference to localStorage
        localStorage.setItem("theme", systemPrefersDark ? "dark" : "light");
      }
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    setSidebarOpen(false); // Close sidebar on mobile after clicking an item
  };

  const toggleSubmenu = (menuId: string) => {
    if (expandedMenus.includes(menuId)) {
      setExpandedMenus(expandedMenus.filter((id) => id !== menuId));
    } else {
      setExpandedMenus([...expandedMenus, menuId]);
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Apply the dark class to the document element
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save preference to localStorage
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sidebar with transparent background and blur */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0 bg-card/80 backdrop-blur-md border-border lg:bg-card lg:backdrop-blur-0 overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-16 px-6 border-border">
            <h2 className="text-xl font-bold text-primary">EduDash</h2>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedMenus.includes(item.id);

              return (
                <div key={item.id}>
                  <button
                    onClick={() =>
                      item.hasSubmenu
                        ? toggleSubmenu(item.id)
                        : handleMenuClick(item.id)
                    }
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors duration-200 ${
                      activeMenu === item.id
                        ? "text-white shadow-md bg-primary"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-foreground"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.hasSubmenu && (
                      <div>
                        {isExpanded ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </div>
                    )}
                  </button>

                  {/* Submenu items */}
                  {item.hasSubmenu && isExpanded && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.submenu?.map((subItem) => {
                        const SubIcon = subItem.icon;
                        return (
                          <button
                            key={subItem.id}
                            onClick={() => handleMenuClick(subItem.id)}
                            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                              activeMenu === subItem.id
                                ? "text-primary font-medium bg-primary/10"
                                : "text-foreground/70 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                          >
                            <SubIcon size={16} />
                            <span className="text-sm">{subItem.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Sidebar Footer - Clickable Admin User */}
          <div className="p-4 border-border">
            <button
              onClick={() => handleMenuClick("school-profile")}
              className="w-full flex items-center space-x-3 p-3 rounded-lg bg-background/80 backdrop-blur-sm lg:bg-background hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
                <User size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-medium truncate text-foreground">
                  Admin User
                </p>
                <p className="text-xs truncate text-foreground opacity-60">
                  admin@school.edu
                </p>
              </div>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar with blur effect */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent bg-opacity-50 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between h-16 px-6 shadow-sm bg-card border-border lg:left-64 transition-all duration-300">
          {/* Left */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-semibold capitalize text-foreground">
              {activeMenu
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </h1>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Search size={20} className="text-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
              <Bell size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <Sun size={20} className="text-accent" />
              ) : (
                <Moon size={20} className="text-foreground" />
              )}
            </button>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-auto pt-16">
          <div className="p-6 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              {/* Content based on active menu */}
              {activeMenu === "dashboard" && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-foreground">
                      Welcome to Dashboard
                    </h2>
                    <p className="text-foreground opacity-70">
                      Overview of your school management system
                    </p>
                  </div>

                  {/* Deadline Notice */}
                  <DeadlineNotice
                    deadline="2025-11-30"
                    className="my-4"
                    variant="detailed"
                  />

                  {/* Stats Cards */}
                  <StatCard />

                  {/* Trending Insights */}
                  <TrendInsights />

                  {/* Recent Activity */}
                  <RecentActivity />

                  {/* Quick Links */}
                  <QuickLinks />

                  {/* Additional Quick Links */}
                  <QuickLinksX />

                  {/* Upcoming Events */}
                  <UpcomingEvents />
                </div>
              )}

              {/* Candidate Submenu Pages */}
              {(activeMenu === "candidates" ||
                activeMenu === "new-candidate" ||
                activeMenu === "modify-candidate" ||
                activeMenu === "view-candidate" ||
                activeMenu === "candidate-reports") && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    {activeMenu
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h2>
                  <div className="rounded-xl p-8 text-center shadow-sm bg-card border border-border">
                    <Users size={48} className="mx-auto mb-4 text-primary" />
                    <p className="text-foreground">
                      {activeMenu
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}{" "}
                      interface coming soon...
                    </p>
                  </div>
                </div>
              )}

              {/* Assessment Submenu Pages */}
              {(activeMenu === "assessment" ||
                activeMenu === "compute-assessment" ||
                activeMenu === "modify-assessment" ||
                activeMenu === "view-assessments" ||
                activeMenu === "assessment-reports") && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    {activeMenu
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h2>
                  <div className="rounded-xl p-8 text-center shadow-sm bg-card border border-border">
                    <ClipboardCheck
                      size={48}
                      className="mx-auto mb-4 text-secondary"
                    />
                    <p className="text-foreground">
                      {activeMenu
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}{" "}
                      tools coming soon...
                    </p>
                  </div>
                </div>
              )}

              {/* Transaction Submenu Pages */}
              {(activeMenu === "transaction" ||
                activeMenu === "make-payment" ||
                activeMenu === "view-transaction" ||
                activeMenu === "verify-invoice" ||
                activeMenu === "log-dispute") && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    {activeMenu
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h2>
                  <div className="rounded-xl p-8 text-center shadow-sm bg-card border border-border">
                    <CreditCard
                      size={48}
                      className="mx-auto mb-4 text-accent"
                    />
                    <p className="text-foreground">
                      {activeMenu
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}{" "}
                      functionality coming soon...
                    </p>
                  </div>
                </div>
              )}

              {/* Reports Submenu Pages */}
              {(activeMenu === "reports" ||
                activeMenu === "photo-card" ||
                activeMenu === "registration-report" ||
                activeMenu === "performance-report" ||
                activeMenu === "financial-report") && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    {activeMenu
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h2>
                  <div className="rounded-xl p-8 text-center shadow-sm bg-card border border-border">
                    <FileText size={48} className="mx-auto mb-4 text-primary" />
                    <p className="text-foreground">
                      {activeMenu
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}{" "}
                      generation coming soon...
                    </p>
                  </div>
                </div>
              )}

              {/* Validation Submenu Pages */}
              {(activeMenu === "validation" ||
                activeMenu === "entry-schedule" ||
                activeMenu === "data-validation" ||
                activeMenu === "document-verification") && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    {activeMenu
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h2>
                  <div className="rounded-xl p-8 text-center shadow-sm bg-card border border-border">
                    <Shield size={48} className="mx-auto mb-4 text-primary" />
                    <p className="text-foreground">
                      {activeMenu
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}{" "}
                      tools coming soon...
                    </p>
                  </div>
                </div>
              )}

              {activeMenu === "school-profile" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    School Profile
                  </h2>
                  <div className="rounded-xl p-8 text-center shadow-sm bg-card border border-border">
                    <School size={48} className="mx-auto mb-4 text-primary" />
                    <p className="text-foreground">
                      School information and settings coming soon...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
