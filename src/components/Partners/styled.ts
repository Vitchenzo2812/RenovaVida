import styled, { css } from "styled-components";
import { THEME } from "../../styles/Theme";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10.8rem 0;
  gap: 7.1rem;
`;

export const Title = styled.h2`
  color: ${THEME.GRAY};
  font-size: 6rem;
  font-weight: 700;

  @media (max-width: 773px) {
    font-size: 5rem;
  }
`;

export const WrapperCarouselWithDot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9.1rem;

  @media (max-width: 913px) {
    gap: 6rem;
  }
`;

export const WrapperPartnersLogo = styled.div`
  display: flex;
  gap: 18rem;

  @media (max-width: 1168px) {
    gap: 10rem;
  }

  @media (max-width: 913px) {
    gap: 6rem;
  }

  @media (max-width: 589px) {
    gap: 3.5rem;
  }
`;

export const ImagePartner = styled.img<{ havefocus: string; leftAndrightSide: boolean }>`
  width: 26rem;
  height: 20rem;
  opacity: ${(props) => (props.havefocus === "true" ? 1 : 0.5)};

  @media (max-width: 1168px) {
    width: 22rem;
    height: 18rem;
  }

  @media (max-width: 913px) {
    width: 20rem;
  }

  @media (max-width: 773px) {
    width: 15rem;
    height: 12rem;
  }

  @media (max-width: 534px) {
    ${(props) =>
      props.leftAndrightSide &&
      css`
        display: none;
      `}
    width: 25rem;
    height: 20rem;
  }
`;

export const DotDivs = styled.div`
  display: flex;
  gap: 2.2rem;

  @media (max-width: 913px) {
    gap: 1.5rem;
  }
`;

export const CarouselDots = styled(motion.div)<{ color?: string; havefocus: string }>`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: ${(props) => (props.havefocus === "true" ? props.color : THEME.LIGHT_GRAY_DOTS)};

  @media (max-width: 913px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 773px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const MontionDiv = styled(motion.div)``;
