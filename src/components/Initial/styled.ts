import styled from "styled-components";
import { motion } from "framer-motion";
import { THEME } from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 125vh;
  background-color: ${THEME.LIGHT_BLUE};
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${THEME.WHITE};
`;

export const RenovaVida = styled.h1<{ size: number }>`
  font-size: ${(props) => `${props.size}rem`};
  font-weight: 700;
  background: ${THEME.LINEAR};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -text-fill-color: transparent;
`;

export const WrapperTitle = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 100%;
  padding-top: 2.6rem;
  justify-content: center;
`;

export const WrapperAllItems = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 110vh;
  justify-content: center;
  gap: 93rem;
`;

export const ImageHand = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const MotionDivText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  text-align: center;
`;

export const TextInitial = styled.p<{ size: number; weight: number }>`
  font-size: ${(props) => `${props.size}rem`};
  font-weight: ${(props) => props.weight};
  color: ${THEME.WHITE};
`;

export const PositionDiv = styled.div<{ padding: number }>`
  padding-top: ${(props) => `${props.padding}rem`};
`;
