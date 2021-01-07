import styled, { createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Styles from "@/utils/styles";

import robotoRegular from "@/fonts/roboto-regular.ttf";
import loraVariable from "@/fonts/lora-variable.ttf";
import quicksandVariable from "@/fonts/quicksand-variable.ttf";

export const Layout = styled("div")``;

export const LayoutGlobalStyles = createGlobalStyle`
   @font-face {
    font-family: "roboto regular";
    src: url(${robotoRegular});
  }

  @font-face {
    font-family: "lora";
    src: url(${loraVariable});
  }

  @font-face {
    font-family: "quicksand";
    src: url(${quicksandVariable});
  }

  html, body {
    margin: 0;
    padding: 0;
    border: none;
    font-size: ${Styles.Constants.fontSizes.fallback};
    font-family: "quicksand", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-family: "quicksand";
  }
`;

export const LayoutChildren = styled(animated.div)`
	overflow-x: hidden;

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		${Styles.Snippets.hideScrollbar()};
	};
`;
