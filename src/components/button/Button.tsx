import React, { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "danger";
}

const Button: FC<ButtonProps> = (props) => {
  const { children, color, className } = props;

  return (
    <button
      {...props}
      className={classNames("btn", className, {
        "btn-primary": color === "primary",
        "btn-secondary": color === "secondary",
        "btn-danger": color === "danger",
      })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "primary",
};

export default Button;
