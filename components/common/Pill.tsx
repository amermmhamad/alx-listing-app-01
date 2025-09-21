import React from "react";

type PillProps = {
  label: string;
  active?: boolean;
  onToggle?: (label: string) => void;
};

const Pill: React.FC<PillProps> = ({ label, active = false, onToggle }) => {
  return (
    <button
      type="button"
      onClick={() => onToggle?.(label)}
      className={[
        "rounded-full border px-3 py-1 text-sm transition",
        active
          ? "bg-indigo-600 text-white border-indigo-600"
          : "hover:bg-gray-50",
      ].join(" ")}
      aria-pressed={active}
    >
      {label}
    </button>
  );
};

export default Pill;
