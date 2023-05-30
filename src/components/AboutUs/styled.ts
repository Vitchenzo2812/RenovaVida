import styled from "styled-components";
import { THEME } from "../../styles/Theme";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-image: url("/background-about-us.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 137vh;

  @media (max-width: 900px) {
    height: 170vh;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  color: ${THEME.WHITE};
  font-size: 8rem;
  font-weight: 700;

  @media (max-width: 1452px) {
    font-size: 6.5rem;
  }

  @media (max-width: 1037px) {
    font-size: 5.5rem;
  }

  @media (max-width: 550px) {
    font-size: 4rem;
  }

  @media (max-width: 426px) {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  font-size: 3rem;
  color: ${THEME.WHITE};

  @media (max-width: 1452px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1037px) {
    font-size: 2rem;
  }
`;

export const ImageGroup = styled.img`
  width: 55rem;
  height: 55rem;
  border-radius: 0 2rem 2rem 0;

  @media (max-width: 1309px) {
    width: 45rem;
    height: 45rem;
  }

  @media (max-width: 900px) {
    border-radius: 2rem;
  }

  @media (max-width: 550px) {
    width: 35rem;
    height: 35rem;
  }

  @media (max-width: 426px) {
    width: 30rem;
    height: 30rem;
  }
`;

export const WrapperAboutUsImage = styled.div`
  display: flex;
  align-items: center;

  gap: 20rem;

  @media (max-width: 1452px) {
    gap: 10rem;
  }

  @media (max-width: 1037px) {
    gap: 7rem;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 900px) {
    padding-top: 10rem;
  }
`;

export const WrapperAboutUsText = styled.div`
  display: flex;
  flex-direction: column;
  width: 65rem;
  gap: 2.5rem;

  @media (max-width: 1309px) {
    width: 45rem;
  }

  @media (max-width: 988px) {
    width: 37rem;
  }

  @media (max-width: 900px) {
    width: 70rem;
    gap: 1.5rem;
  }

  @media (max-width: 740px) {
    width: 50rem;
    gap: 1.5rem;
  }

  @media (max-width: 550px) {
    width: 40rem;
  }

  @media (max-width: 426px) {
    width: 30rem;
    text-align: center;
  }
`;

export const MotionDiv = styled(motion.div)``;
