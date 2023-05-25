import styled from "styled-components";
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

export const TitleSection = styled.h2<{ color: string }>`
  font-size: 6rem;
  font-weight: 700;
  color: ${(props) => props.color};
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

export const DotList = styled.div`
  background-color: ${THEME.GREEN};
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
  border-bottom: 5px solid ${THEME.WHITE};
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
