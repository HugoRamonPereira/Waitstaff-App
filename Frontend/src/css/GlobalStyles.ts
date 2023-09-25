import { createGlobalStyle } from 'styled-components';

import ManropeLightTtf from '../assets/fonts/Manrope-Light.ttf';
import ManropeLightWoff from '../assets/fonts/Manrope-Light.woff';
import ManropeLightWoff2 from '../assets/fonts/Manrope-Light.woff2';
import ManropeMediumTtf from '../assets/fonts/Manrope-Medium.ttf';
import ManropeMediumWoff from '../assets/fonts/Manrope-Medium.woff';
import ManropeMediumWoff2 from '../assets/fonts/Manrope-Medium.woff2';
import ManropeSemiboldTtf from '../assets/fonts/Manrope-Semibold.ttf';
import ManropeSemiboldWoff from '../assets/fonts/Manrope-Semibold.woff';
import ManropeSemiboldWoff2 from '../assets/fonts/Manrope-Semibold.woff2';

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Manrope, sans-serif;
  }

  body {
    background: #fafafa;
    color: #333;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 300;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ManropeLightTtf}') format('truetype'),
         url('${ManropeLightWoff}') format('woff'),
         url('${ManropeLightWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ManropeMediumTtf}') format('truetype'),
         url('${ManropeMediumWoff}') format('woff'),
         url('${ManropeMediumWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${ManropeSemiboldTtf}') format('truetype'),
         url('${ManropeSemiboldWoff}') format('woff'),
         url('${ManropeSemiboldWoff2}') format('woff2');
  }
`;