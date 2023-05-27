import styled from "styled-components";
import { motion } from "framer-motion";
import { THEME } from "../../styles/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 125vh;
  background-color: ${THEME.LIGHT_BLUE};

  @media (min-width: 922px) {
    background: url("/hand-initial.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${THEME.WHITE};

  @media (max-width: 922px) {
    font-size: 7rem;
  }

  @media (max-width: 757px) {
    font-size: 6rem;
  }

  @media (max-width: 673px) {
    font-size: 5rem;
  }

  @media (max-width: 540px) {
    font-size: 4rem;
  }
`;

export const RenovaVida = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  background: ${THEME.LINEAR};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -text-fill-color: transparent;

  @media (max-width: 922px) {
    font-size: 7rem;
  }

  @media (max-width: 757px) {
    font-size: 6rem;
  }

  @media (max-width: 673px) {
    font-size: 5rem;
  }

  @media (max-width: 540px) {
    font-size: 4rem;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 100%;
  padding-top: 2.6rem;
  justify-content: center;

  @media (max-width: 922px) {
    padding-top: 8rem;
  }

  @media (max-width: 540px) {
    padding-top: 10rem;
    gap: 1rem;
  }

  @media (max-width: 426px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const WrapperAllItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 75rem;

  @media (max-width: 1485px) {
    gap: 80rem;
  }

  @media (max-width: 1413px) {
    gap: 70rem;
  }

  @media (max-width: 1199px) {
    gap: 58rem;
  }

  @media (max-width: 1095px) {
    gap: 40rem;
  }

  @media (max-width: 922px) {
    flex-direction: column;
    gap: 10rem;
    padding-top: 15rem;
  }

  @media (max-width: 540px) {
    padding-top: 13rem;
    gap: 15rem;
  }
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

  @media (max-width: 1485px) {
    font-size: ${(props) => `${props.size - 0.5}rem`};
  }

  @media (max-width: 1289px) {
    font-size: ${(props) => `${props.size - 1}rem`};
  }

  @media (max-width: 922px) {
    font-size: ${(props) => `${props.size}rem`};
  }

  @media (max-width: 673px) {
    font-size: ${(props) => `${props.size - 1}rem`};
  }
`;

export const PositionDivFirstPhrase = styled.div`
  padding-top: 22rem;

  @media (max-width: 1199px) {
    padding-top: 35rem;
  }

  @media (max-width: 922px) {
    padding-top: 0;
  }
`;

export const PositionDivSecondPhrase = styled.div`
  padding-top: 46rem;

  @media (max-width: 1199px) {
    padding-top: 47rem;
  }

  @media (max-width: 922px) {
    padding-top: 0;
  }
`;
