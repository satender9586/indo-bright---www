import {
  PageContainer,
  Brand,
  Button,
  VStack,
  HStack,
  Span,
} from "@/components/shared";
import { NAV_LINKS } from "@/content/shared";
import Link from "next/link";

export const Footer = () => (
  <PageContainer className="">
    <footer className="flex flex-row justify-between items-center rounded-t-3xl px-10 bg-primary text-white">
      <VStack className="w-full">
        <VStack className="md:flex-row gap-4 justify-between py-8">
          <VStack>
            <Brand />
          </VStack>
          <HStack className="gap-8 items-center">
            {NAV_LINKS.map((o) => (
              <Link key={o.href} href={o.href} className="text-sm">
                <Span className="text-md font-medium text-white/75 hover:text-white">
                  {o.label}
                </Span>
              </Link>
            ))}
          </HStack>
        </VStack>
        <VStack className="md:flex-row gap-4 justify-between py-8 border-t border-white/25">
          <Span className="text-white/50 text-xs">
            Copyright © {new Date().getFullYear()} Indo Bright Services Pvt.
            Ltd.
          </Span>
          <Span className="text-white/50 text-xs">
            Designed & Developed by{" "}
            <Link
              href="https://honeyhexa.com"
              className="items-center font-medium text-white"
            >
              Honey Hexa
            </Link>
          </Span>
        </VStack>
      </VStack>
    </footer>
  </PageContainer>
);
