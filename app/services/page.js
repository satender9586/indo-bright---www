import React from "react";
import { VStack } from "@/components/shared";
import { SECTION_HERO_PROPS } from "@/content/services";
import { Section } from "@/components/section";
import { FAQS } from "@/components/faqs";
import { FAQ_PROPS } from "@/content/home";



//
// ───────────────────────────────────────────────────── MAIN COMPONENT ───────
//

export default function Services() {
  return (
    <VStack className="gap-20">
      <Section {...SECTION_HERO_PROPS} flip />
      <FAQS {...FAQ_PROPS} />
    </VStack>
  );
}
