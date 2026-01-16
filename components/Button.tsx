import React from "react";
type ButtonType = {
  text: string;
  variant: "Primary" | "Secondary" | "Outline";
};
const Button = ({ text, variant }: ButtonType) => {
  return (
    <div>
      <button
        className={`${
          variant === "Primary"
            ? "btn-primary"
            : variant === "Secondary"
            ? "btn-secondary"
            : "btn-outline"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
