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
  <Element as="p" className={twMerge("text-md", className)} {...rest} />
);
export const Span = ({ className, as, ...rest }) => (
  <Element as={as ?? "span"} className={twMerge("text-xs", className)} {...rest} />
);

export const Brand = ({ white = false }) => (
  <Link href="/" className="flex flex-row items-center gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 742 882"
      className={clsx("w-6 h-6 md:w-8 md:h-8", { "text-white": white })}
      fill="none"
    >
      <path
        d="M517.78 407.66C578.89 398.38 717.36 314.06 676.36 157.03C635.35 0 395.55 0 395.55 0H8.77994C-9.79006 15.47 8.77994 44.87 8.77994 44.87L404.06 60.34C537.88 73.49 534.79 211.96 534.79 211.96C543.3 413.08 353.01 392.97 353.01 392.97L141.83 393.74C141.83 393.74 148.79 662.93 140.28 754.21C131.77 845.49 14.9599 840.85 14.9599 840.85C-5.15006 864.83 16.51 881.85 16.51 881.85H474.45C638.44 872.57 734.36 834.66 741.32 641.76C748.29 448.84 517.78 407.66 517.78 407.66ZM559.55 763.49C559.55 763.49 546.4 802.17 475.23 817.64C404.06 833.11 334.44 817.64 334.44 817.64C334.44 817.64 289.57 807.58 288.03 741.06V478.05C288.03 478.05 288.8 450.98 310.46 449.43C332.12 447.88 387.04 449.43 387.04 449.43C387.04 449.43 516.22 441.69 559.54 546.12C602.87 650.55 559.55 763.49 559.55 763.49Z"
        fill={white ? "#FFFFFF" : "#D51F27"}
      />
      <path
        d="M202.94 325.85C249.934 325.85 288.03 287.754 288.03 240.76C288.03 193.766 249.934 155.67 202.94 155.67C155.946 155.67 117.85 193.766 117.85 240.76C117.85 287.754 155.946 325.85 202.94 325.85Z"
        fill={white ? "#FFFFFF" : "#363F99"}
      />
    </svg>
    <Span className={twMerge("text-primary text-sm md:text-lg font-bold tracking-widest", clsx({ "text-white": white }))}>INDOBRIGHT</Span>
  </Link>
);

export const Button = ({
  as = "button",
  icon,
  dark = false,
  size = 0,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        "flex flex-row gap-4 items-center h-10 bg-white text-sm font-medium text-black px-4 rounded-xl shadow-2xl",
        clsx({
          "bg-primary text-white": dark === true,
          "h-16 px-6 text-xl": size === 1,
        }),
        className
      )}
      {...rest}
    >
      {children}
      {icon}
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
