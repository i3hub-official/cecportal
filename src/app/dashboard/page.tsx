"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Users,
  BarChart3,
  CreditCard,
  Settings,
  Bell,
  User,
  LogOut,
  Menu,
  X,
  BookCheck,
  CheckCircle,
  Clock,
  Calendar,
  AlertCircle,
  Award,
  FileText,
  Download,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  PieChart,
  BookOpen,
  GraduationCap,
} from "lucide-react";

interface SchoolDashboardProps {
  schoolName?: string;
  centerNumber?: string;
  userName?: string;
}

// Mock data
const mockCandidates = [
  {
    id: 1,
    name: "Chinwe Okoro",
    examNumber: "CEC2024-001",
    class: "SS3",
    subjects: ["Mathematics", "English", "Physics", "Chemistry"],
    status: "Registered",
    registrationDate: "2024-03-15",
    avatar: "CO",
  },
  {
    id: 2,
    name: "Emmanuel Nwosu",
    examNumber: "CEC2024-002",
    class: "SS3",
    subjects: ["Mathematics", "English", "Chemistry", "Biology"],
    status: "Registered",
    registrationDate: "2024-03-16",
    avatar: "EN",
  },
  {
    id: 3,
    name: "Amara Eze",
    examNumber: "CEC2024-003",
    class: "SS3",
    subjects: ["Mathematics", "English", "Biology"],
    status: "Pending",
    registrationDate: "2024-03-17",
    avatar: "AE",
  },
  {
    id: 4,
    name: "Chukwudi Okeke",
    examNumber: "CEC2024-004",
    class: "SS2",
    subjects: ["Mathematics", "English", "Economics", "Literature"],
    status: "Completed",
    registrationDate: "2024-03-18",
    avatar: "CO",
  },
  {
    id: 5,
    name: "Ngozi Onwuka",
    examNumber: "CEC2024-005",
    class: "SS3",
    subjects: ["Mathematics", "English", "Literature"],
    status: "Completed",
    registrationDate: "2024-03-19",
    avatar: "NO",
  },
];

const mockTransactions = [
  {
    id: 1,
    date: "2024-03-15",
    description: "Registration Fee - 50 Students",
    amount: 75000,
    status: "Completed",
    type: "Credit",
  },
  {
    id: 2,
    date: "2024-03-18",
    description: "Additional Registration - 10 Students",
    amount: 15000,
    status: "Completed",
    type: "Credit",
  },
  {
    id: 3,
    date: "2024-03-20",
    description: "Service Charge",
    amount: 2000,
    status: "Pending",
    type: "Debit",
  },
];

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "candidates", label: "Candidates", icon: Users },
  { id: "assessment", label: "Assessment", icon: BarChart3 },
  { id: "transactions", label: "Transactions", icon: CreditCard },
  { id: "profile", label: "School Profile", icon: Settings },
];

const subjectColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-purple-100 text-purple-800",
  "bg-orange-100 text-orange-800",
];

export default function SchoolDashboard({
  schoolName = "Holy Trinity Secondary School",
  centerNumber = "CEC001",
  userName = "Admin User",
}: SchoolDashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("2024");
  const [notifications, setNotifications] = useState(3);

  const itemsPerPage = 5;

  // Filter candidates based on search term
  const filteredCandidates = mockCandidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.examNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate candidates
  const paginatedCandidates = filteredCandidates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Dashboard stats - REMOVED REVENUE
  const dashboardStats = {
    totalCandidates: mockCandidates.length,
    registeredCandidates: mockCandidates.filter(
      (c) => c.status === "Registered"
    ).length,
    pendingCandidates: mockCandidates.filter((c) => c.status === "Pending")
      .length,
    completedCandidates: mockCandidates.filter((c) => c.status === "Completed")
      .length,
  };

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // Stats Card Component
  const StatsCard = ({
    title,
    value,
    icon: Icon,
    iconBgColor,
    iconColor,
  }: {
    title: string;
    value: string | number;
    icon: any;
    iconBgColor: string;
    iconColor: string;
  }) => (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${iconBgColor}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="ml-4">
          <p className="text-sm text-foreground/70">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </div>
    </div>
  );

  // Quick Action Component
  const QuickAction = ({
    icon: Icon,
    label,
    href,
  }: {
    icon: any;
    label: string;
    href: string;
  }) => (
    <a
      href={href}
      className="flex items-center p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition"
    >
      <Icon className="w-5 h-5 mr-3" />
      <span>{label}</span>
    </a>
  );

  // Status Badge Component
  const StatusBadge = ({ status }: { status: string }) => {
    const getStatusStyles = () => {
      switch (status) {
        case "Registered":
          return "bg-green-100 text-green-800";
        case "Pending":
          return "bg-amber-100 text-amber-800";
        case "Completed":
          return "bg-blue-100 text-blue-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs ${getStatusStyles()}`}>
        {status}
      </span>
    );
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-primary/20">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-foreground">
              Welcome back!
            </h2>
            <p className="text-foreground/70">
              Here's what's happening at your school today.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid - REMOVED REVENUE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Total Candidates"
          value={dashboardStats.totalCandidates}
          icon={Users}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />

        <StatsCard
          title="Registered"
          value={dashboardStats.registeredCandidates}
          icon={CheckCircle}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />

        <StatsCard
          title="Pending"
          value={dashboardStats.pendingCandidates}
          icon={Clock}
          iconBgColor="bg-amber-100"
          iconColor="text-amber-600"
        />

        <StatsCard
          title="Completed"
          value={dashboardStats.completedCandidates}
          icon={BookCheck}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Registration Timeline */}
        <div className="lg:col-span-2 bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-4">Registration Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                <span>Registration Opens</span>
              </div>
              <span className="text-sm text-foreground/70">March 1, 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-amber-500 mr-3" />
                <span>Early Registration Deadline</span>
              </div>
              <span className="text-sm text-foreground/70">March 20, 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                <span>Final Registration Deadline</span>
              </div>
              <span className="text-sm text-foreground/70">April 5, 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-green-500 mr-3" />
                <span>Examination Period</span>
              </div>
              <span className="text-sm text-foreground/70">
                April 15-26, 2024
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <QuickAction icon={FileText} label="View Transactions" href="#" />
            <QuickAction icon={Users} label="Manage Candidates" href="#" />
            <QuickAction icon={Download} label="Generate Reports" href="#" />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 text-left text-sm font-medium">Date</th>
                <th className="py-3 text-left text-sm font-medium">
                  Description
                </th>
                <th className="py-3 text-left text-sm font-medium">Amount</th>
                <th className="py-3 text-left text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-border">
                  <td className="py-3 text-sm">{transaction.date}</td>
                  <td className="py-3 text-sm">{transaction.description}</td>
                  <td className="py-3 text-sm">
                    ₦{transaction.amount.toLocaleString()}
                  </td>
                  <td className="py-3 text-sm">
                    <StatusBadge status={transaction.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCandidates = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Candidate Management</h2>
        <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
          <Plus className="w-5 h-5 mr-2" />
          Add Candidate
        </button>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/30 w-5 h-5" />
            <input
              type="text"
              placeholder="Search candidates by name or exam number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          <div className="flex gap-2">
            <button className="p-2 border border-border rounded-lg hover:bg-card">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 border border-border rounded-lg hover:bg-card">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 text-left text-sm font-medium">Name</th>
                <th className="py-3 text-left text-sm font-medium">
                  Exam Number
                </th>
                <th className="py-3 text-left text-sm font-medium">Class</th>
                <th className="py-3 text-left text-sm font-medium">Subjects</th>
                <th className="py-3 text-left text-sm font-medium">Status</th>
                <th className="py-3 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedCandidates.map((candidate) => (
                <tr key={candidate.id} className="border-b border-border">
                  <td className="py-3 text-sm">{candidate.name}</td>
                  <td className="py-3 text-sm font-mono">
                    {candidate.examNumber}
                  </td>
                  <td className="py-3 text-sm">{candidate.class}</td>
                  <td className="py-3 text-sm">
                    <div className="flex flex-wrap gap-1">
                      {candidate.subjects.slice(0, 2).map((subject) => (
                        <span
                          key={subject}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                        >
                          {subject}
                        </span>
                      ))}
                      {candidate.subjects.length > 2 && (
                        <span className="px-2 py-1 bg-card text-foreground/70 text-xs rounded">
                          +{candidate.subjects.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 text-sm">
                    <StatusBadge status={candidate.status} />
                  </td>
                  <td className="py-3 text-sm">
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:text-green-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-foreground/70">
            Showing {paginatedCandidates.length} of {filteredCandidates.length}{" "}
            candidates
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="px-3 py-2 border border-border rounded-lg">
              Page {currentPage} of{" "}
              {Math.ceil(filteredCandidates.length / itemsPerPage)}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(filteredCandidates.length / itemsPerPage)
                  )
                )
              }
              disabled={
                currentPage ===
                Math.ceil(filteredCandidates.length / itemsPerPage)
              }
              className="p-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="#"
          className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium">Export Validation List</p>
              <p className="text-xs text-foreground/70">
                Download candidate validation list
              </p>
            </div>
          </div>
        </a>

        <a
          href="#"
          className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium">Photocard Report</p>
              <p className="text-xs text-foreground/70">
                Generate exam photo cards
              </p>
            </div>
          </div>
        </a>

        <a
          href="#"
          className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100">
              <PieChart className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium">Subject Analysis</p>
              <p className="text-xs text-foreground/70">
                View subject distribution
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard();
      case "candidates":
        return renderCandidates();
      case "assessment":
        return (
          <div className="p-6 text-center">
            Continuous Assessment Section - Coming Soon
          </div>
        );
      case "transactions":
        return (
          <div className="p-6 text-center">
            Transactions Section - Coming Soon
          </div>
        );
      case "profile":
        return (
          <div className="p-6 text-center">
            School Profile Section - Coming Soon
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header - Horizontal Bar */}
      <div className="bg-card border-b border-border py-4 px-6 sticky top-16 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 rounded-md hover:bg-background"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <div>
              <h1 className="text-xl font-bold">{schoolName}</h1>
              <p className="text-sm text-foreground/70">
                Center Number: {centerNumber}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-background rounded-lg">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">{userName}</span>
            </div>

            <button className="p-2 hover:bg-background rounded-lg">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
          fixed md:static top-[136px] left-0 z-30 h-[calc(100vh-136px)] 
          bg-card border-r border-border transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-64 w-64
        `}
        >
          <nav className="p-4 space-y-1 h-full overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition ${
                    activeTab === item.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-background"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  );
}
