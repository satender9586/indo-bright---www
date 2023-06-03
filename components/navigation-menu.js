"use client";

import { NAV_LINKS, MEGA_MENU_CATEGORIES, CATEGORIES, SERVICES } from "@/content/shared";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button, Span, VStack } from "@/components/shared";
import Link from "next/link";
import { IconCancel, IconMenu, IconPhone } from "@/content/svgs";
import { twMerge } from "tailwind-merge";
import React from 'react';
import clsx from "clsx";

export const Navgitaion = () => (
  <NavigationMenu.Root className="hidden md:block">
    <NavigationMenu.List className="flex flex-row">
      {NAV_LINKS.map((o) => (
        <NavigationMenu.Item className="flex items-center px-4" key={o.href}>
          {o.menu ? (
            <>
              <NavigationMenu.Trigger className="h-20 text-sm font-bold tracking-widest opacity-50 data-[state=open]:opacity-100 data-[state=open]:text-primary uppercase">
                {o.label}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="text-black p-10 bg-white rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {CATEGORIES.map((o) => (
                    <VStack key={o}>
                      <Span className="text-sm font-semibold opacity-75 uppercase border-b mb-4">
                        {o}
                      </Span>
                      <ul className="flex flex-col">
                        {SERVICES.filter(s => s.category === o).map((s) => (
                          <NavigationMenu.Link asChild key={s.label}>
                            <Link href={"/services/"+ s.label.toLowerCase().split(" ").join("-").trim()}>
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

export const MobileNavgitaion = () => {
  const [open, setOpen] = React.useState(false);
  return (
  <div className="block md:hidden">
  <Button className="border" onClick={() => setOpen(!open)} icon={open ? <IconCancel className="w-6 h-6 z-50" /> : <IconMenu className="w-6 h-6 z-50" />} />
  <div className={twMerge(clsx("fixed -top-6 -left-4 w-screen h-screen overflow-scroll bg-white", { hidden: !open }))}>
  <NavigationMenu.Root className="">
    <NavigationMenu.List className="flex flex-col py-40 pl-10 gap-8">
      {NAV_LINKS.map((o) => (
        <NavigationMenu.Item className="flex items-center px-4" key={o.href}>
            {o.menu ? (
            <>
              <NavigationMenu.Trigger className="text-left text-sm font-bold tracking-widest opacity-50 data-[state=open]:opacity-100 data-[state=open]:text-primary uppercase">
                {o.label}
                <br/>
                <br/>
                <br/>
                
              {/* <NavigationMenu.Content className="text-black p-10 bg-white rounded-3xl"> */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {CATEGORIES.map((o) => (
                    <VStack key={o}>
                      <Span className="text-sm font-semibold opacity-75 uppercase border-b mb-4">
                        {o}
                      </Span>
                      <ul className="flex flex-col">
                        {SERVICES.filter(s => s.category === o).map((s) => (
                          <NavigationMenu.Link asChild key={s.label} onClick={() => setTimeout(() => setOpen(!open), 100)}>
                            <Link href={"/services/"+ s.label.toLowerCase().split(" ").join("-").trim()}>
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
              {/* </NavigationMenu.Content> */}
              </NavigationMenu.Trigger>
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
  </NavigationMenu.Root>
  
  </div>

</div>
  )
};