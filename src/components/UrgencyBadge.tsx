import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface UrgencyBadgeProps {
  urgency: 'critical' | 'urgent' | 'moderate';
  className?: string;
}

const UrgencyBadge = ({ urgency, className }: UrgencyBadgeProps) => {
  const variants = {
    critical: "bg-red-100 text-red-700 border-red-300 animate-pulse",
    urgent: "bg-orange-100 text-orange-700 border-orange-300",
    moderate: "bg-yellow-100 text-yellow-700 border-yellow-300"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border-2",
        variants[urgency],
        className
      )}
    >
      <AlertCircle className="w-3 h-3" />
      {urgency.charAt(0).toUpperCase() + urgency.slice(1)}
    </span>
  );
};

export default UrgencyBadge;
