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
`;

export const Title = styled.h2`
  color: ${THEME.WHITE};
  font-size: 8rem;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 3rem;
  color: ${THEME.WHITE};
`;

export const ImageGroup = styled.img`
  width: 70rem;
  height: 70rem;
  border-radius: 0 2rem 2rem 0;
`;

export const WrapperAboutUsImage = styled.div`
  display: flex;
  gap: 20rem;
`;

export const WrapperAboutUsText = styled.div`
  display: flex;
  flex-direction: column;
  width: 65rem;
  gap: 2.5rem;
`;

export const MotionDiv = styled(motion.div)``;
