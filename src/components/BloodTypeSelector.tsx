import { cn } from "@/lib/utils";

interface BloodTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const BloodTypeSelector = ({ value, onChange, className }: BloodTypeSelectorProps) => {
  return (
    <div className={cn("grid grid-cols-4 gap-2", className)}>
      {bloodTypes.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => onChange(type)}
          className={cn(
            "px-4 py-3 rounded-lg border-2 font-semibold transition-all",
            value === type
              ? "border-primary bg-primary text-primary-foreground shadow-soft"
              : "border-border bg-card hover:border-primary/50 hover:bg-muted"
          )}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default BloodTypeSelector;
