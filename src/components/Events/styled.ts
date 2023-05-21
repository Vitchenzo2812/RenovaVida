import styled, { css } from "styled-components";
import { THEME } from "../../styles/Theme";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;
  margin-bottom: 5.6rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 6rem;
  color: ${THEME.GRAY};
  padding-top: 3.3rem;
`;

export const CarouselDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20.2rem;
  padding-top: 4.6rem;
`;

export const WrapperCarouselSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  align-items: center;
`;

export const Arrow = styled.img<{ side?: string }>`
  width: 4.1rem;
  height: 3.4rem;
  cursor: pointer;

  ${(props) =>
    props.side === "right" &&
    css`
      transform: rotate(180deg);
    `}
`;

export const imagesCarousel = styled.img`
  width: 60.8rem;
  height: 50rem;
  border-radius: 2rem;
`;

export const Subtitle = styled(Link)`
  font-family: ${inter.style.fontFamily}, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  text-decoration: underline;
  color: ${THEME.GRAY};
`;

export const MotionButton = styled(motion.button)`
  background-color: transparent;
`;

export const MotionDivText = styled(motion.div)``;

export const MotionDivAnimate = styled(motion.div)``;
