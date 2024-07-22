"use client";
import React, { MouseEventHandler } from "react";
import IcnSpinner from "@/public/icons/icn-spinner.svg";

import cn from "@/utils/cn";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  outlined?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  fullWidth?: boolean;
  kind?: "primary" | "secondary" | "light";
  size?: "medium" | "small";
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  fullWidth,
  kind = "primary",
  loading,
  onClick,
  outlined,
  size = "medium",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={cn(
        `rounded-lg inline-flex justify-center relative transition-all border border-transparent`,
        className,
        {
          "font-medium px-6 py-[11px] text-base": size === "medium",
          "font-medium px-3 py-[5px] text-base": size === "small",
          "bg-dark-100 border-dark-100 text-white hover:enabled:text-white hover:enabled:bg-dark-300 hover:enabled:border-dark-300":
            kind === "primary",
          "bg-transparent border-dark-100 text-dark-100 hover:enabled:text-white hover:enabled:bg-dark-100 hover:enabled:border-dark-100":
            kind === "secondary",
          "bg-light-100 border-light-100 text-dark-100 hover:enabled:text-dark-100 hover:enabled:bg-grey-100 hover:enabled:border-grey-100":
            kind === "light",
          "cursor-progress": !!loading,
          "w-full": fullWidth,
        }
      )}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <IcnSpinner
            className={cn(`w-[20px] animate-spin`, {
              "fill-white": kind === "primary",
            })}
          />
        </div>
      ) : null}{" "}
      <div
        className={cn({
          invisible: loading,
        })}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
