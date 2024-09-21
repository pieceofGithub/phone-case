"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export const Phone = ({
  className,
  imgSrc,
  dark = false,
  ...props
}: PhoneProps) => {
  useEffect(() => {
    console.log("Phone component mounted or updated with imgSrc:", imgSrc);

    return () => {
      console.log("Phone component unmounted");
    };
  }, []);

  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone template"
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute inset-0 -z-10">
        <img
          src={imgSrc}
          alt="overlaying phone image"
          className="object-cover"
        />
      </div>
    </div>
  );
};
