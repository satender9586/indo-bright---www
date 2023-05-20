"use client";

import { NAV_LINKS, SERVICES } from "@/content/shared";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { HStack, Span, VStack } from "./shared";
import { CATEGORIES } from "@/content/home";
import Link from "next/link";

export const Navgitaion = () => (
  <NavigationMenu.Root className="hidden md:block">
    <NavigationMenu.List className="flex flex-row">
      {NAV_LINKS.map((o) => (
        <NavigationMenu.Item className="flex items-center px-4" key={o.href}>
          {o.menu ? (
            <>
              <NavigationMenu.Trigger className="h-20 text-sm font-bold tracking-widest opacity-50 data-[state=open]:opacity-100 data-[state=open]:text-primary uppercase">
                <NavigationMenu.Link href={o.href}>{o.label}</NavigationMenu.Link>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="text-black p-10 bg-white rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {SERVICES.map((o) => (
                    <VStack key={o.label}>
                      <Span className="text-sm font-semibold opacity-75 uppercase border-b mb-4">
                        {o.label}
                      </Span>
                      <ul className="flex flex-col">
                        {o.services.map((s) => (
                          <NavigationMenu.Link asChild key={s.label}>
                            <Link href={s.href}>
                              <li
                                className="text-sm text-black/50 hover:text-primary py-1"
                                key={s.label}
                              >
                                {s.label}
                              </li>
                            </Link>
                          </NavigationMenu.Link>
                        ))}
                      </ul>
                    </VStack>
                  ))}
                </div>
              </NavigationMenu.Content>
            </>
          ) : (
            <Link
              className="text-sm font-bold tracking-widest opacity-50 hover:opacity-100 hover:text-primary uppercase"
              href={o.href}
            >
              {o.label}
            </Link>
          )}
        </NavigationMenu.Item>
      ))}
      <NavigationMenu.Indicator />
    </NavigationMenu.List>
    <div className="absolute flex justify-center w-full z-50 left-0">
      <NavigationMenu.Viewport className="relative w-full pt-4" />
    </div>
  </NavigationMenu.Root>
);
