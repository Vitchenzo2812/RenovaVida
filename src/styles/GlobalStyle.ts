import { createGlobalStyle } from "styled-components";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export const GlobalStyle = createGlobalStyle`    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: ${poppins.style.fontFamily},sans-serif;
        font-weight: 400;
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
        ::-webkit-scrollbar {
          display:none;
        }
        scroll-behavior: auto;
    }
`;
