import React from "react";
import { VStack } from "@/components/shared";
import { Section } from "@/components/section";
import {
  SECTION_HERO_PROPS,
} from "@/content/home";

//
// ───────────────────────────────────────────────────── MAIN COMPONENT ───────
//

export default function Home() {
  return (
    <VStack className="gap-20">
      <Section {...SECTION_HERO_PROPS} />
    </VStack>
  );
}
