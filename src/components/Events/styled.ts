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
  margin-bottom: 4.5rem;

  @media (max-width: 1230px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 679px) {
    margin-bottom: 1rem;
    gap: 5rem;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 6rem;
  color: ${THEME.GRAY};
  padding-top: 5rem;

  @media (max-width: 1230px) {
    font-size: 5rem;
  }
`;

export const CarouselDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20.2rem;
  padding-top: 3.5rem;

  @media (max-width: 1230px) {
    padding-top: 2.5rem;
  }

  @media (max-width: 969px) {
    gap: 16rem;
  }

  @media (max-width: 820px) {
    gap: 13rem;
  }

  @media (max-width: 756px) {
    gap: 8rem;
  }

  @media (max-width: 679px) {
    gap: 4rem;
  }
`;

export const WrapperCarouselSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
  text-align: center;

  @media (max-width: 679px) {
    gap: 2rem;
    flex-direction: column-reverse;
  }
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
  width: 50rem;
  height: 42rem;
  border-radius: 2rem;

  @media (max-width: 1230px) {
    width: 45rem;
    height: 40rem;
  }

  @media (max-width: 969px) {
    width: 40rem;
    height: 37rem;
  }

  @media (max-width: 679px) {
    display: none;
  }
`;

export const Subtitle = styled(Link)`
  font-family: ${inter.style.fontFamily}, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  text-decoration: underline;
  color: ${THEME.GRAY};

  @media (max-width: 1230px) {
    font-size: 2.5rem;
  }

  @media (max-width: 756px) {
    font-size: 2.2rem;
  }

  @media (max-width: 679px) {
    font-size: 3rem;
  }

  @media (max-width: 376px) {
    font-size: 2.5rem;
  }
`;

export const MotionButton = styled(motion.button)`
  background-color: transparent;
`;

export const MotionDivText = styled(motion.div)``;

export const MotionDivAnimate = styled(motion.div)``;
