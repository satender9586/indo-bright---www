import {
  PageContainer,
  Brand,
  VStack,
  Span,
  HStack,
} from "@/components/shared";
import { NAV_LINKS_FOOTER, SOCIALS } from "@/content/shared";
import { IconHashtag, IconLocation, IconMail, IconPhone } from "@/content/svgs";
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
            {NAV_LINKS_FOOTER.map((o) => (
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
              <Span as="a" href="mailto:hello@indobright.co.in" className="text-sm text-white/75 hover:text-white">
                hello@indobright.co.in
              </Span>
            </HStack>
            <HStack className="items-center">
              <IconPhone className="w-4 h-4 mr-2" />
              <Span as="a" href="tel:+917946040261" className="text-sm text-white/75 hover:text-white">
                079 4604 0261
              </Span>
            </HStack>
            <HStack className="items-center">
              <IconHashtag className="w-4 h-4 mr-2" />
              <Span className="text-sm text-white/75 hover:text-white">
                U74909GJ2023PTC141394
              </Span>
            </HStack>
          </VStack>
          <VStack className="items-end gap-8">
          <HStack>
            <IconLocation className="min-w-[1rem] w-4 h-4 mr-2" />
            <Span className="text-sm text-white/75 hover:text-white">
              520-A 5th Floor, SAKAR-IX, Near City Gold, Ashram Road, Ahmedabad - 380009
            </Span>
          </HStack>
          <HStack className="gap-x-8 gap-y-4 items-center flex-wrap">
            {SOCIALS.map((o) => (
              <Link key={o.href} href={o.href} className="text-sm">
                <Span className="text-md font-medium text-white/75 hover:text-white">
                  {o.label}
                </Span>
              </Link>
            ))}
          </HStack>
          </VStack>
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
