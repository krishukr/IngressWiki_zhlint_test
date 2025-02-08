// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "zh-Hans"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    starlight({
      title: "Ingress.Wiki",
      social: {
        github: "https://github.com/ingress-wiki/wiki",
      },
      customCss: ["./src/styles/global.css"],
      plugins: [
        starlightSidebarTopics([
          {
            id: "guides",
            label: "Guides",
            icon: "open-book",
            link: "/guides/",
            items: [
              {
                label: "Getting Started",
                autogenerate: { directory: "guides/starter" },
              },
              {
                label: "Digging Deeper",
                autogenerate: { directory: "guides/advanced" },
              },
            ],
          },
          {
            id: "reference",
            label: "Reference",
            icon: "seti:db",
            link: "/reference/",
            items: [
              {
                label: "Inventory Items",
                autogenerate: { directory: "reference/items" },
              },
              {
                label: "Medals",
                autogenerate: { directory: "reference/medals" },
              },
            ],
          },
        ]),
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
