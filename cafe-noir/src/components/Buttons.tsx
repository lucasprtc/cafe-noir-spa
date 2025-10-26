import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  href?: string;
  color?: string;
  submit?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ 
  text, 
  href, 
  color = "darkblue", 
  submit = false,
  onClick 
}) => {
  const colorClasses = {
    darkblue: "bg-dark-blue hover:bg-light-blue text-almond hover:text-dark-blue",
    lightblue: "bg-light-blue hover:bg-dark-blue text-dark-blue hover:text-almond",
    coral: "bg-coral text-almond hover:bg-light-orange",
    lightorange: "bg-light-orange text-almond hover:bg-coral",
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.darkblue;
  
  const baseClasses = `inline-block text-lg w-fit px-5 py-3 rounded-[5px] font-primary transition-colors duration-200 leading-6 ${selectedColor}`;

  // Si c'est un bouton de soumission
  if (submit) {
    return (
      <button
        type="submit"
        onClick={onClick}
        className={baseClasses}
      >
        {text}
      </button>
    );
  }

  // Si c'est un lien
  return (
    <Link
      href={href || "#"}
      className={baseClasses}
    >
      {text}
    </Link>
  );
};

export default Button;