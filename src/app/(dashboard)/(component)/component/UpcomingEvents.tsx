// components/dashboard/UpcomingEvents.tsx
import { Calendar } from "lucide-react";

const mockEvents = [
  { date: "2025-09-15", title: "MOCK Exam - Physics" },
  { date: "2025-09-20", title: "Registration Deadline" },
  { date: "2025-09-25", title: "MOCK Exam - Mathematics" },
];

export default function UpcomingEvents() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          Upcoming Events
        </h3>
      </div>

      <ul className="space-y-3">
        {mockEvents.map((event, i) => (
          <li
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/40 transition-colors"
          >
            <div className="text-sm font-medium text-primary min-w-[80px]">
              {new Date(event.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
              })}
            </div>
            <span className="text-sm text-foreground">{event.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
