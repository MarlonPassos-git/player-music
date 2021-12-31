import { progressiveClamp } from "progressive-size/dist";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    /* Collors*/
    --strong_cyan: #01aac1;
    --dark_cyan: #017d8e;
    --vivid_cyan: #01d7f4;
    --black: #111111;
    --white: #ffffff;
    --dark_gray: #2a2a2a;

    /* Spacing */

    --spacing-padding: ${progressiveClamp(24, 81)};
  }

 

  body {
      background-color: var(--white);
  }

`