import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Chirp-web",
    body: "Chirp-web",
  },
  sizes: {
    container: {
      twitter: "1400px",
    },
  },
  styles: {
    global: {
      "#__next, html, body": {
        height: "100%",
        width: "100%",
      },
      "*::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          rounded: "full",
          color: "#fff",
          bg: "twitter.500",
        },
      },
    },
  },
});
