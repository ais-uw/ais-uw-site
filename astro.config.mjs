// @ts-check
import { defineConfig } from "astro/config";
import staticAdapter from "@astrojs/adapter-static";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    adapter: staticAdapter(),
    base: process.env.GITHUB_REPOSITORY
        ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
        : "/",
});
