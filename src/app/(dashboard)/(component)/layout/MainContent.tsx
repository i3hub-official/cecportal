"use client";
import React from "react";
import { useNavigation } from "../context/NavigationContext";
import DashboardContent from "../content/DashboardContent";
import PlaceholderContent from "../content/PlaceholderContent";

const MainContent = () => {
  const { activeMenu } = useNavigation();

  return (
    <main className="flex-1 overflow-auto pt-16">
      <div className="p-6 bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {activeMenu === "dashboard" ? (
            <DashboardContent />
          ) : (
            <PlaceholderContent />
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;