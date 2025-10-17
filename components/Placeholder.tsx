interface PlaceholderProps {
  label: string;
  aspect?: "16:9" | "3:2" | "1:1";
  className?: string;
}

export default function Placeholder({ label, aspect = "3:2", className = "" }: PlaceholderProps) {
  const aspectRatio = {
    "16:9": "aspect-[16/9]",
    "3:2": "aspect-[3/2]",
    "1:1": "aspect-square"
  };

  return (
    <div 
      className={`
        ${aspectRatio[aspect]} 
        w-full 
        bg-gray-100 dark:bg-gray-700
        border border-gray-200 dark:border-gray-600
        rounded-card 
        flex items-center justify-center 
        text-gray-600 dark:text-gray-300
        font-medium 
        text-center 
        p-4
        ${className}
      `}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  );
}
