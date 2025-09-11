"use client";
import React, { createContext, useContext, useState } from "react";

interface NavigationContextType {
  sidebarOpen: boolean;
  activeMenu: string;
  expandedMenus: string[];
  toggleSidebar: () => void;
  setActiveMenu: (menuId: string) => void;
  toggleSubmenu: (menuId: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    setExpandedMenus([]);
    setSidebarOpen(false);
  };

  const toggleSubmenu = (menuId: string) => {
    if (!expandedMenus.includes(menuId)) {
      setExpandedMenus([menuId]);
    } else {
      setExpandedMenus(expandedMenus.filter((id) => id !== menuId));
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        sidebarOpen,
        activeMenu,
        expandedMenus,
        toggleSidebar,
        setActiveMenu: handleMenuClick,
        toggleSubmenu,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
