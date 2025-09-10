export default function StatCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[
        {
          title: "Total Students",
          value: "1,234",
          change: "+5%",
          color: "primary",
        },
        {
          title: "Active Assessments",
          value: "23",
          change: "+12%",
          color: "secondary",
        },
        {
          title: "Pending Transactions",
          value: "45",
          change: "-3%",
          color: "accent",
        },
        {
          title: "School Rating",
          value: "4.8",
          change: "+0.2",
          color: "primary",
        },
      ].map((stat, index) => (
        <div
          key={index}
          className="p-6 rounded-xl shadow-sm bg-card border-border"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-foreground opacity-70">
              {stat.title}
            </h3>
            <span
              className={`text-xs px-2 py-1 rounded-full bg-${stat.color}/20 text-${stat.color}`}
            >
              {stat.change}
            </span>
          </div>
          <p className="text-3xl font-bold text-foreground">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
