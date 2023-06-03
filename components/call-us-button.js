import { Button } from "@/components/shared";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const CallUsButton = ({
  children = "Call Us",
  icon,
  dark = false,
  size = 0,
  className,
  ...rest
}) => {
  return (
    <a
      className={twMerge(
        "flex flex-row gap-4 items-center h-10 bg-white text-sm font-medium text-black px-4 rounded-xl",
        clsx({
          "bg-primary text-white": dark === true,
          "h-16 px-6 text-xl": size === 1,
        }),
        className
      )}
      {...rest}
      href="tel:+917935179718"
    >
      {children}
      {icon}
    </a>
  );
};
