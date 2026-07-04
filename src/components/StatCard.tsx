import { LucideIcon } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

interface StatCardProps {
  icon: LucideIcon;
  target: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatCard({ icon: Icon, target, label, suffix = '', delay = 0 }: StatCardProps) {
  const count = useCountUp(target, 1800, delay);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white px-4 py-5 shadow-card transition hover:shadow-card-hover">
      <div className="mb-2 flex justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-elarbol-50 to-emerald-50">
          <Icon className="h-5 w-5 text-elarbol-600" strokeWidth={2} />
        </div>
      </div>
      <div className="text-2xl font-bold tabular-nums text-gray-900 sm:text-3xl">
        {count}
        {suffix}
      </div>
      <div className="mt-0.5 text-xs text-gray-500 sm:text-sm">{label}</div>
    </div>
  );
}
