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
} from "lucide-react";
import StatCard from "../(component)/component/StatCard";
import RecentActivity from "../(component)/component/RecentActivity";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if dark mode is preferred by the user's system
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(isDarkMode);

      // Apply the dark class to the document element
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
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

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Apply the dark class to the document element
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "candidates", label: "Candidates", icon: Users },
    { id: "assessment", label: "Assessment", icon: ClipboardCheck },
    { id: "transaction", label: "Transaction", icon: CreditCard },
  ];

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
      lg:translate-x-0 bg-card/80 backdrop-blur-md border-border lg:bg-card lg:backdrop-blur-0`}
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
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors duration-200 ${
                    activeMenu === item.id
                      ? "text-white shadow-md bg-primary"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-foreground"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
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
              {activeMenu}
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
        <main className="flex-1 overflow-auto">
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

                  {/* Stats Cards */}
                  <StatCard />

                  {/* Recent Activity */}
                  <RecentActivity />
                </div>
              )}

              {activeMenu === "candidates" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Student Candidates
                  </h2>
                  <div className="rounded-xl p-8 text-center shadow-sm bg-card border border-border">
                    <Users size={48} className="mx-auto mb-4 text-primary" />
                    <p className="text-foreground">
                      Candidate management interface coming soon...
                    </p>
                  </div>
                </div>
              )}

              {activeMenu === "assessment" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Assessment Center
                  </h2>
                  <div className="rounded-xl p-8 text-center shadow-sm bg-card border border-border">
                    <ClipboardCheck
                      size={48}
                      className="mx-auto mb-4 text-secondary"
                    />
                    <p className="text-foreground">
                      Assessment tools and analytics coming soon...
                    </p>
                  </div>
                </div>
              )}

              {activeMenu === "transaction" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Transaction Management
                  </h2>
                  <div className="rounded-xl p-8 text-center shadow-sm bg-card border border-border">
                    <CreditCard
                      size={48}
                      className="mx-auto mb-4 text-accent"
                    />
                    <p className="text-foreground">
                      Payment and transaction tracking coming soon...
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
