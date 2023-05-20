import React from "react";
import { H3, HStack, Para, VStack } from "@/components/shared";
import { Section } from "@/components/section";
import {
  CATEGORIES,
  SECTION_HERO_PROPS,
  SECTION_LAST_PROPS,
  SECTION_ONE_PROPS,
  SECTION_TWO_PROPS,
} from "@/content/home";
import { CategoryCard } from "@/components/category-card";

//
// ───────────────────────────────────────────────────── MAIN COMPONENT ───────
//

export default function Home() {
  return (
    <VStack className="gap-20">
      <Section {...SECTION_HERO_PROPS} />
      <Section {...SECTION_ONE_PROPS} paper flip />
      <Section {...SECTION_TWO_PROPS} dark paper flip>
        <HStack className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CATEGORIES.map((o) => <CategoryCard key={o.name} {...o} />)}
        </HStack>
      </Section>
    </VStack>
  );
}
