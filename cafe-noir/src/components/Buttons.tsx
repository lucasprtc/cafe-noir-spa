import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  href: string;
  color?: string; // ex: "blue", "red", "green", ou une couleur Tailwind personnalisée
};

const Button: React.FC<ButtonProps> = ({ text, href, color = "blue" }) => {
  const colorClasses = {
    darkblue: "bg-dark-blue hover:bg-light-blue text-almond hover:text-dark-blue",
    lightblue: "bg-light-blue hover:bg-dark-blue text-dark-blue hover:text-almond",
    coral: "bg-coral text-almond hover:bg-light-orange",
    lightorange: "bg-light-orange text-almond hover:bg-coral",
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.darkblue;

  return (
    <Link
      href={href}
      className={`inline-block text-lg w-fit px-5 py-3 rounded-[5px] font-primary transition-colors duration-200 leading-6 ${selectedColor}`}
    >
      {text}
    </Link>
  );
};

export default Button;