import { robotoSlab } from "@/app/fonts";
import {
  Button,
  Element,
  HStack,
  PageContainer,
  Para,
  Span,
  VStack,
} from "@/components/shared";
import clsx from "clsx";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { CalButton } from "./cal-button";

export const Section = ({
  labelProps: { className: labelClassName, ...labelProps } = {},
  titleProps: { className: titleClassName, ...titleProps } = {},
  descProps: { className: descClassName, ...descProps } = {},
  paper = false,
  flip = false,
  dark = false,
  calProps,
  buttonProps,
  imgProps,
  children,
  padding = 1,
  className,
}) => (
  <PageContainer className={className}>
    <VStack
      className={twMerge(
        "p-10 rounded-3xl gap-32",
        clsx({
          "bg-white": (paper && !dark) === true,
          "bg-primary": (paper && dark) === true,
          "md:p-10": padding === 0,
          "md:p-20": padding === 1,
        })
      )}
    >
      <HStack
        className={clsx("gap-10 flex-col lg:flex-row items-center", {
          "lg:flex-row-reverse": flip === true,
        })}
      >
        <VStack className="w-full lg:w-1/2 items-start gap-4">
          {labelProps && (
            <Span
              className={twMerge(
                "text-sm font-bold uppercase text-primary/50",
                clsx({
                  "text-primary/50": (paper && !dark) === true,
                  "text-white/50": (paper && dark) === true,
                }),
                labelClassName
              )}
              {...labelProps}
            />
          )}
          {titleProps && (
            <Element
              as={titleProps?.as ?? "h2"}
              className={twMerge(
                "text-3xl md:text-6xl leading-tight",
                clsx({
                  "text-white": (paper && dark) === true,
                }),
                robotoSlab.className,
                titleClassName
              )}
              {...titleProps}
            />
          )}
          {descProps && (
            <Para
              className={twMerge(
                "text-md text-black/50",
                clsx({
                  "text-white/75": (paper && dark) === true,
                }),
                descClassName
              )}
              {...descProps}
            />
          )}
          {calProps && <CalButton {...calProps} />}
          {buttonProps && (
            <>
              <br />
              <Button {...buttonProps} />
            </>
          )}
        </VStack>
        {imgProps && (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image
            className="object-cover h-[30rem] w-full lg:w-1/2 rounded-3xl drop-shadow-xl"
            {...imgProps}
          />
        )}
      </HStack>
      {children}
    </VStack>
  </PageContainer>
);
