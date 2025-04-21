/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";

export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],

    theme: {
        extend: {
            colors: {
                primary: "#3d325f",
                primaryHover: "#5c4f80",
                secondary: "#dcbf77",
                gold: {
                    50: "#FAF8F5",
                    100: "#F5F1EB",
                    200: "#F2E9DB",
                    300: "#DDCAB2",
                    400: "#D5BD9F",
                    500: "#DCBF77",
                    600: "#C9A95B",
                    700: "#B6933F",
                    800: "#A37D23",
                    900: "#A46B1A",
                },
                purple: {
                    50: "#EAE5E3",
                    100: "#D5CBC7",
                    200: "#C0B1AB",
                    300: "#AB978F",
                    400: "#967D73",
                    500: "#867F9F",
                    600: "#6A5E5B",
                    700: "#554A47",
                    800: "#3D325F",
                    900: "#2A1F3D",
                },
            },

            fontFamily: {
                sans: ["Space Grotesk", "ui-sans-serif", "system-ui"],
                display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
                mono: ["Fira Code", "monospace"],
            },
        },
    },
    plugins: [typography],
};
