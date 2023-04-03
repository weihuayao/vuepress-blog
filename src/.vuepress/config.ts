import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "wayde's blog", 
      description: "wayde's blog ✨",
    },
  },
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
        'link', { rel: 'icon', href: '/logo.png' }
    ]
  ],
  theme
  // Enable it with pwa
  // shouldPrefetch: false,
});
