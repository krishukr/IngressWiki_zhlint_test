import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { topicSchema } from "starlight-sidebar-topics/schema";

import zhHans from "../node_modules/@astrojs/starlight/translations/zh-CN.json";
import zhHant from "../node_modules/@astrojs/starlight/translations/zh-TW.json";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: topicSchema }),
  }),
  i18n: defineCollection({
    // We're basing translations on written script not region.
    loader: async () => ({
      "zh-Hans": zhHans,
      "zh-Hant": zhHant,
    }),
    schema: i18nSchema(),
  }),
};
