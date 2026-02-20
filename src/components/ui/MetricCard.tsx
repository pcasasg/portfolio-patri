interface MetricCardProps {
  value: string;
  label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-gradient">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}
