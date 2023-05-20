import { PageContainer, Brand, Button } from "@/components/shared";
import { Navgitaion } from "./navigation-menu";

export const Header = () => (
  <PageContainer className="z-50 pt-4 sticky top-0">
    <header className="drop-shadow-[0_28px_28px_rgba(0,0,0,0.4)] border border-secondary/50 border-solid flex flex-row justify-between items-center h-20 rounded-3xl px-4 md:px-10 bg-white/50 backdrop-blur-lg text-black">
      <span className="w-[12rem] flex flex-row">
        <Brand />
      </span>
      <Navgitaion />
      <span className="w-[12rem] flex flex-row-reverse">
        <Button
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-3.223-.716a1.5 1.5 0 00-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 01-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 001.052-1.767l-.716-3.223A1.5 1.5 0 004.648 2H3.5zM16.5 4.56l-3.22 3.22a.75.75 0 11-1.06-1.06l3.22-3.22h-2.69a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V4.56z" />
            </svg>
          }
        >
          {" "}
          Book a Call{" "}
        </Button>
      </span>
    </header>
  </PageContainer>
);
