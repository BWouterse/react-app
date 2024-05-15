import React from "react";

interface ButtonProps {
  children: string;
  colour?: "primary" | "secondary" | "succes" | "danger"; //? makes the prop optional
  onClick: () => void;
}

const Button = ({ children, onClick, colour = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
