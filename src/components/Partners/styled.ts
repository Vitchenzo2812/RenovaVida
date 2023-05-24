import styled from "styled-components";
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
`;

export const WrapperCarouselWithDot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9.1rem;
`;

export const WrapperPartnersLogo = styled.div`
  display: flex;
  gap: 18rem;
`;

export const ImagePartner = styled.img<{ haveFocus: boolean }>`
  width: 26rem;
  height: 20rem;
  opacity: ${(props) => (props.haveFocus ? 1 : 0.5)};
`;

export const DotDivs = styled.div`
  display: flex;
  gap: 2.2rem;
`;

export const CarouselDots = styled(motion.div)<{ color?: string; haveFocus: boolean }>`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: ${(props) => (props.haveFocus ? props.color : THEME.LIGHT_GRAY_DOTS)};
`;

export const MontionDiv = styled(motion.div)``;
