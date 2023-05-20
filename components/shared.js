import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export const PageContainer = ({ className, ...rest }) => (
  <div
    className={twMerge("max-w-7xl w-full px-4 m-auto", className)}
    {...rest}
  />
);

export const ZStack = ({ list = [] }) => (
  <div className="grid grid-rows-1 grid-cols-1 w-full">
    {list.map(({ zIndex, view }) => (
      <div
        key={zIndex}
        className={`col-start-1 row-start-1 col-end-1 row-end-1 ${zIndex}`}
      >
        {view}
      </div>
    ))}
  </div>
);

export const HStack = ({ className, ...rest }) => (
  <div {...rest} className={twMerge("flex flex-row", className)} />
);

export const VStack = ({ className, ...rest }) => (
  <div {...rest} className={twMerge("flex flex-col", className)} />
);

export const Element = ({ as, children, ...rest }) => {
  return React.createElement(as, { ...rest }, children);
};

export const H1 = ({ className, ...rest }) => (
  <Element as="h1" className={twMerge("text-3xl", className)} {...rest} />
);
export const H2 = ({ className, ...rest }) => (
  <Element as="h2" className={twMerge("text-2xl", className)} {...rest} />
);
export const H3 = ({ className, ...rest }) => (
  <Element as="h3" className={twMerge("text-xl", className)} {...rest} />
);
export const H4 = ({ className, ...rest }) => (
  <Element as="h4" className={twMerge("text-lg", className)} {...rest} />
);
export const H5 = ({ className, ...rest }) => (
  <Element as="h5" className={twMerge("text-md", className)} {...rest} />
);
export const H6 = ({ className, ...rest }) => (
  <Element as="h6" className={twMerge("text-sm", className)} {...rest} />
);
export const Para = ({ className, ...rest }) => (
  <Element as="p" className={twMerge("text-xs", className)} {...rest} />
);
export const Span = ({ className, ...rest }) => (
  <Element as="span" className={twMerge("text-xs", className)} {...rest} />
);

export const Brand = () => (
  <Link href="/" className="flex flex-row">
    <Span className="text-md font-bold">INDO BRIGHT</Span>
  </Link>
);

export const Button = ({ as = "button", icon, dark = false, size = 0, children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "flex flex-row gap-4 items-center h-10 bg-white text-sm font-medium text-black px-4 rounded-xl",
        clsx({
          "bg-primary text-white": dark === true,
          "h-16 px-6 text-xl": size === 1,
        }),
        className
      )}
      {...rest}
    >
      {children}{icon}
    </button>
  );
};
// React.createElement(
//   as,
//   {
//     className: twMerge(
//       "h-10 bg-white text-sm font-medium text-black px-4 rounded-xl",
//       className
//     ),
//     ...rest,
//   },
//   children
// );
