import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const Markdown = ({ className, ...restProps }) => {
  return (
    <div
      className={twMerge(
        clsx(
          "markdown [&>h1]:text-3xl [&>h1]:mb-12 [&>h2]:text-2xl [&>h2]:my-8 [&>h3]:text-md [&>p]:text-base [&>p]:pb-4",
          className
        )
      )}
      {...restProps}
    />
  );
};
