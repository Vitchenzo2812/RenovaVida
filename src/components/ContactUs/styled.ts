import styled from "styled-components";
import { THEME } from "../../styles/Theme";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 184vh;
  background-image: url("/background-contact-us.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 12.3rem;

  @media (max-width: 761px) {
    gap: 7rem;
  }
`;

export const Title = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  color: ${THEME.WHITE};
  padding-top: 25rem;

  @media (max-width: 948px) {
    font-size: 4.5rem;
  }

  @media (max-width: 761px) {
    padding-top: 18rem;
  }

  @media (max-width: 474px) {
    font-size: 4rem;
  }

  @media (max-width: 416px) {
    font-size: 3.5rem;
  }

  @media (max-width: 375px) {
    font-size: 3rem;
  }
`;

export const ContainerAllComponents = styled.div`
  display: flex;
  gap: 12.1rem;

  @media (max-width: 1108px) {
    gap: 9rem;
  }

  @media (max-width: 948px) {
    align-items: center;
  }

  @media (max-width: 862px) {
    gap: 5rem;
  }

  @media (max-width: 761px) {
    flex-direction: column;
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media (max-width: 1108px) {
    gap: 5rem;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.p<{ color: string; size: number; weight?: number }>`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  text-align: left;

  @media (max-width: 1108px) {
    font-size: ${(props) => props.size - 0.5}rem;
  }

  @media (max-width: 948px) {
    font-size: ${(props) => props.size - 1}rem;
  }

  @media (max-width: 375px) {
    font-size: ${(props) => props.size - 1.4}rem;
  }
`;

export const Icon = styled.div<{ icon: string; hover: string }>`
  background-image: ${(props) => `url(${props.icon})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 8.5rem;
  height: 8.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-image: ${(props) => `url(${props.hover})`};
  }

  @media (max-width: 1108px) {
    width: 6.5rem;
    height: 6.5rem;
  }

  @media (max-width: 948px) {
    width: 5.5rem;
    height: 5.5rem;
  }

  @media (max-width: 375px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 3.7rem;

  @media (max-width: 330px) {
    gap: 1.5rem;
  }
`;

export const Map = styled(motion.div)`
  width: 48.1rem;
  height: 48.1rem;
  border-radius: 2rem;
  background: url("/maps.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1108px) {
    width: 40rem;
    height: 40rem;
  }

  @media (max-width: 816px) {
    width: 35rem;
    height: 35rem;
  }

  @media (max-width: 375px) {
    width: 30rem;
    height: 30rem;
  }
`;

export const MotionDiv = styled(motion.div)``;
