interface SkillTagProps {
  skill: string;
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md";
}

const variants = {
  default: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
  primary: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  secondary:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
};

const sizeStyles = {
  sm: {
    padding: "4px 8px",
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },
  md: {
    padding: "6px 12px",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
};

export default function SkillTag({
  skill,
  variant = "default",
  size = "sm",
}: SkillTagProps) {
  return (
    <span
      className={`${variants[variant]} font-medium rounded-md inline-block`}
      style={sizeStyles[size]}
    >
      {skill}
    </span>
  );
}
