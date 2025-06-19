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

const sizes = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
};

export default function SkillTag({
  skill,
  variant = "default",
  size = "sm",
}: SkillTagProps) {
  return (
    <span
      className={`${sizes[size]} ${variants[variant]} font-medium rounded-md inline-block`}
    >
      {skill}
    </span>
  );
}
