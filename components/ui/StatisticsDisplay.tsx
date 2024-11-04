interface Statistic {
  label: string;
  value: number | string;
}

interface StatisticsDisplayProps {
  statistics: Statistic[];
}

export function StatisticsDisplay({ statistics }: StatisticsDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statistics.map((stat, index) => (
        <div
          key={index}
          className="rounded-lg border bg-card p-6 text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}