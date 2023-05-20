import React from "react";
import { VStack } from "@/components/shared";
import { SECTION_HERO_PROPS } from "@/content/work";
import { Section } from "@/components/section";



//
// ───────────────────────────────────────────────────── MAIN COMPONENT ───────
//

export default function Work() {
  return (
    <VStack className="gap-20">
      <Section {...SECTION_HERO_PROPS} flip />
    </VStack>
  );
}
