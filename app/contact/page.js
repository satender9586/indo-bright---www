import {
  Element,
  HStack,
  PageContainer,
  Span,
  VStack,
} from "@/components/shared";
import { SECTION_HERO_PROPS } from "@/content/contact";
import { FAQS } from "@/components/faqs";
import { FAQ_PROPS } from "@/content/home";
import { robotoSlab } from "@/app/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TallyForm } from "@/components/tally-form";

//
// ───────────────────────────────────────────────────── MAIN COMPONENT ───────
//

export default function Contact() {
  return (
    <VStack className="gap-20">
      <PageContainer>
        <VStack className="p-10 rounded-3xl gap-32">
          <HStack className="gap-10 flex-col-reverse lg:flex-row items-center">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              className="object-cover h-[30rem] w-full lg:w-1/2 rounded-3xl drop-shadow-xl"
              {...SECTION_HERO_PROPS.imgProps}
            />
            <VStack className="w-full lg:w-1/2 gap-4">
              <Span className="text-sm font-bold uppercase text-primary/50">
                Contact Us
              </Span>
              <Element
                as={"h1"}
                className={twMerge(
                  "text-3xl md:text-6xl leading-tight",
                  robotoSlab.className
                )}
              >
                Let&apos;s get in touch
              </Element>
              <br />
              <TallyForm />
            </VStack>
          </HStack>
        </VStack>
      </PageContainer>
      <FAQS {...FAQ_PROPS} />
    </VStack>
  );
}
