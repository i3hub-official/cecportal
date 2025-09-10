export default function RecentActivity() {
  return (
    <div className="rounded-xl p-6 shadow-sm bg-card border-border">
      <h3 className="text-lg font-semibold mb-4 text-foreground">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {[
          "New student registration completed",
          "Assessment results published for Math 101",
          "Payment received from John Doe",
          "School profile updated",
        ].map((activity, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="w-2 h-2 rounded-full bg-primary" />
            <p className="text-foreground">{activity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
