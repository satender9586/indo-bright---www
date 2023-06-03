import clsx from "clsx";
import { H3, Para, VStack } from "./shared";
import { robotoSlab } from "@/app/fonts";
import { IconAcademic } from "@/content/svgs";

export const CategoryCard = ({ name, title, desc, icon }) => {
  return (
    <VStack
      key={name}
      className="p-20 items-center gap-10 border bg-white rounded-3xl"
    >
      {icon ?? <IconAcademic className="w-32 h-32 text-primary/75" />}
      <H3 className={clsx("md:text-4xl text-center", robotoSlab.className)}>{title}</H3>
      <Para className="text-md text-center">{desc}</Para>
    </VStack>
  );
};
