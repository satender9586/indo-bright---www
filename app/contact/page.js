import React from "react";
import { VStack } from "@/components/shared";
import { SECTION_HERO_PROPS } from "@/content/contact";
import { Section } from "@/components/section";



//
// ───────────────────────────────────────────────────── MAIN COMPONENT ───────
//

export default function Contact() {
  return (
    <VStack className="gap-20">
      <Section {...SECTION_HERO_PROPS} flip />
    </VStack>
  );
}
