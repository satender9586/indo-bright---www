import { SERVICE_SLUGS } from "@/content/shared";

export default function sitemap() {
  return [
    {
      url: "https://www.indobright.co.in",
      lastModified: new Date(),
    },
    {
      url: "https://www.indobright.co.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.indobright.co.in/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.indobright.co.in/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.indobright.co.in/work",
      lastModified: new Date(),
    },
    ...SERVICE_SLUGS.map(({ href }) => ({
      url: "https://www.indobright.co.in/services" + href,
      lastModified: new Date(),
    })),
  ];
}
