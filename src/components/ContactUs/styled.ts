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
`;

export const Title = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  color: ${THEME.WHITE};
  padding-top: 25rem;
`;

export const ContainerAllComponents = styled.div`
  display: flex;
  gap: 12.1rem;
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.p<{ color: string; size: number; weight?: number }>`
  font-size: ${(props) => `${props.size}rem`};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  text-align: left;
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
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 3.7rem;
`;

export const Map = styled(motion.div)`
  width: 48.1rem;
  height: 48.1rem;
  border-radius: 2rem;
  background: url("/maps.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MotionDiv = styled(motion.div)``;
