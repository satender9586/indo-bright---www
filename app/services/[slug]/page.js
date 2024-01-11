import React from "react";
import { VStack } from "@/components/shared";
import {
  SECTION_HERO_PROPS,
  SECTION_ONE_PROPS,
} from "@/content/service-details";
import { Section } from "@/components/section";
import { FAQS } from "@/components/faqs";
import { FAQ_PROPS } from "@/content/home";
import { SERVICE_SLUGS } from "@/content/shared";
import { Markdown } from "@/components/markdown";

export function generateStaticParams() {
  return SERVICE_SLUGS.map(({ href }) => ({ slug: href.slice(1) }));
}

//
// ───────────────────────────────────────────────────── MAIN COMPONENT ───────
//

export default function Service({ params }) {
  const service = SERVICE_SLUGS.find(
    (s) => s.href.slice(1) === params?.slug?.toLowerCase()
  );
  return (
    <VStack className="gap-20">
      <Section
        {...{
          ...SECTION_HERO_PROPS,
          titleProps: { children: service.label },
          descProps: { children: service?.content?.one_description },
        }}
        flip
      />
      <Section
        {...{
          ...SECTION_ONE_PROPS,
          descProps: { children: service?.content?.two_description },
        }}
        paper
      >
        <VStack>
          <Markdown>

          {service?.content?.three_description}
          </Markdown>
        </VStack>
      </Section>
      <FAQS {...FAQ_PROPS} />
    </VStack>
  );
}
