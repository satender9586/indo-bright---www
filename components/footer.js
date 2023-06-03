import {
  PageContainer,
  Brand,
  VStack,
  Span,
  HStack,
} from "@/components/shared";
import { NAV_LINKS } from "@/content/shared";
import { IconLocation, IconMail, IconPhone } from "@/content/svgs";
import Link from "next/link";

export const Footer = () => (
  <PageContainer>
    <footer className="flex flex-row justify-between items-center rounded-t-3xl px-10 bg-primary text-white">
      <VStack className="w-full">
        <VStack className="md:flex-row gap-12 justify-between py-8">
          <VStack>
            <Brand white />
          </VStack>
          <HStack className="gap-x-8 gap-y-4 items-center flex-wrap">
            {NAV_LINKS.map((o) => (
              <Link key={o.href} href={o.href} className="text-sm">
                <Span className="text-md font-medium text-white/75 hover:text-white">
                  {o.label}
                </Span>
              </Link>
            ))}
          </HStack>
        </VStack>
        <VStack className="md:flex-row gap-12 justify-between py-8">
          <VStack className="items-start gap-4">
            <HStack className="items-center">
              <IconMail className="w-4 h-4 mr-2" />
              <Span className="text-sm text-white/75 hover:text-white">
                hello@indobright.co.in
              </Span>
            </HStack>
            <HStack className="items-center">
              <IconPhone className="w-4 h-4 mr-2" />
              <Span className="text-sm text-white/75 hover:text-white">
                +91 79 3517 9718
              </Span>
            </HStack>
          </VStack>
          <HStack>
            <IconLocation className="min-w-[1rem] w-4 h-4 mr-2" />
            <Span className="text-sm text-white/75 hover:text-white">
              Seven Spaces, Ratnam Complex, C.G. Road, Ahmedabad, Gujarat, India
            </Span>
          </HStack>
        </VStack>
        <VStack className="md:flex-row gap-4 justify-between py-8 border-t border-white/25">
          <Span className="text-white/75 text-sm">
            © {new Date().getFullYear()} Indobright Services Pvt. Ltd.
          </Span>
          <Span className="text-white/75 text-sm">
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
