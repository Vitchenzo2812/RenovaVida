import styled from "styled-components";
import Link from "next/link";
import { THEME } from "../../styles/Theme";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 257vh;
  background-image: url("/background-how-to-help.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 8rem;
  font-weight: 700;
  color: ${THEME.WHITE};
  padding-top: 70rem;
`;

export const WrapperSubtitles = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 3rem;
`;

export const Subtitle = styled.h3`
  font-size: 4rem;
  font-weight: 400;
  color: ${THEME.WHITE};
`;

export const SubtitleBold = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  color: ${THEME.WHITE};
`;

export const TextSection = styled.p<{ color: string; size: number; weight?: number }>`
  font-size: ${(props) => `${props.size}rem`};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  text-align: center;
`;

export const WrapperTextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  padding-top: 15rem;
`;

export const WrapperWhiteBoxPix = styled.div`
  display: flex;
  gap: 20rem;
  align-items: center;
`;

export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${THEME.WHITE};
  padding: 4rem 7rem;
  border-radius: 2rem;
  margin-top: 15rem;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const DotList = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
`;

export const ContainerPix = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const WrapperIconAndTextPix = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const WrapperKeyPix = styled(WrapperIconAndTextPix)`
  border-bottom: 0.5rem solid ${THEME.WHITE};
`;

export const Icons = styled.img`
  width: 5.8rem;
  height: 5.3rem;
`;

export const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerPartnerDonor = styled(motion.div)`
  padding-top: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6rem;
`;

export const WrapperTextPartnerDonor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ButtonBecomeDonor = styled(Link)`
  display: flex;
  justify-content: center;
  width: 45rem;
  background-color: ${THEME.GREEN};
  padding: 1.9rem 4.4rem;
  border-radius: 1rem;
  font-size: 3rem;
  font-weight: 700;
  text-decoration: none;
  color: ${THEME.WHITE};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
    color: ${THEME.GREEN};
  }
`;

export const ContainerPersonalHelp = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 9rem;
  padding: 20rem 0 10rem 0;
`;

export const WrapperTextPersonalHelp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

export const BlackBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  background-color: ${THEME.GRAY};
  padding: 3.6rem 3rem;
  border-radius: 2rem 0 0 2rem;
  gap: 2.5rem;
  margin-left: auto;
`;

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const WrapperContactUs = styled.div`
  width: max-content;
  border-bottom: 0.2rem solid ${THEME.GRAY};
`;
