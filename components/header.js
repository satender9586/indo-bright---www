import { PageContainer, Brand, Button } from "@/components/shared";
import { MobileNavgitaion, Navgitaion } from "./navigation-menu";
import { CalButton } from "./cal-button";
import { IconPhone } from "@/content/svgs";
import { CallUsButton } from "./call-us-button";

export const Header = () => (
  <>
    <PageContainer className="z-50 pt-6 sticky top-0">
      <header className="drop-shadow-[0_28px_28px_rgba(0,0,0,0.2)] border border-secondary/50 border-solid flex flex-row justify-between items-center h-20 rounded-3xl px-4 md:px-10 bg-white/75 backdrop-blur-xl text-black">
        <span className="w-[12rem] flex flex-row">
          <Brand />
        </span>
        <Navgitaion />
        <span className="w-[12rem] flex flex-row-reverse">
          <CallUsButton
            dark
            className="hidden md:flex"
            icon={<IconPhone className="w-4 h-4" />}
          />
          <MobileNavgitaion />
        </span>
      </header>
    </PageContainer>
  </>
);
