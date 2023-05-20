import React from "react";
import { H3, Para, VStack } from "@/components/shared";
import { SECTION_ABOUT_PROPS, SECTION_HERO_PROPS, STATS } from "@/content/about";
import { Section } from "@/components/section";
import clsx from "clsx";
import { robotoSlab } from "../fonts";
import { FAQS } from "@/components/faqs";
import { FAQ_PROPS } from "@/content/home";

//
// ───────────────────────────────────────────────────── MAIN COMPONENT ───────
//

export default function About() {
  return (
    <VStack className="gap-20">
      <Section {...SECTION_HERO_PROPS} flip />
      <Section {...SECTION_ABOUT_PROPS} flip>
        <div className="grid grid-cols-2 md: grid-cols-4">
          {STATS.map((o) => (
            <VStack className="text-white gap-2" key={o.name}>
              <H3 className={clsx("text-6xl font-bold", robotoSlab.className)}>{o.value}</H3>
              <Para className="text-lg font-medium uppercase opacity-50">{o.label}</Para>
            </VStack>
          ))}
        </div>
      </Section>
      <FAQS {...FAQ_PROPS} />
    </VStack>
  );
}
