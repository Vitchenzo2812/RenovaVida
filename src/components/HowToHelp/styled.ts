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

  @media (max-width: 1440px) {
    height: 300vh;
  }

  @media (max-width: 1265px) {
    height: 320vh;
  }

  @media (max-width: 706px) {
    height: 280vh;
  }

  @media (max-width: 539px) {
    height: 250vh;
  }

  @media (max-width: 489px) {
    height: 260vh;
  }
`;

export const Title = styled.h2`
  font-size: 8rem;
  font-weight: 700;
  color: ${THEME.WHITE};
  padding-top: 40rem;

  @media (max-width: 706px) {
    font-size: 6rem;
  }

  @media (max-width: 479px) {
    font-size: 5rem;
  }

  @media (max-width: 380px) {
    font-size: 4rem;
  }
`;

export const WrapperSubtitles = styled.div`
  display: flex;
  padding-top: 3rem;
`;

export const Subtitle = styled.h3`
  width: 100%;
  font-size: 3rem;
  font-weight: 400;
  color: ${THEME.WHITE};
  text-align: center;

  @media (max-width: 706px) {
    font-size: 2.5rem;
  }

  @media (max-width: 479px) {
    font-size: 2rem;
  }

  @media (max-width: 380px) {
    font-size: 1.7rem;
  }
`;

export const TitleSections = styled.h3<{ color: string }>`
  font-size: 6rem;
  font-weight: 700;
  color: ${(props) => props.color};

  @media (max-width: 706px) {
    font-size: 4rem;
  }

  @media (max-width: 539px) {
    font-size: 3rem;
  }
`;

export const SubtitleSections = styled.p<{ color: string }>`
  font-size: 3rem;
  color: ${(props) => props.color};
  text-align: center;

  @media (max-width: 706px) {
    font-size: 2.5rem;
  }

  @media (max-width: 479px) {
    font-size: 2rem;
  }

  @media (max-width: 380px) {
    font-size: 1.7rem;
  }
`;

export const TitlePix = styled.p`
  font-size: 4rem;
  font-weight: 700;
  color: ${THEME.WHITE};

  @media (max-width: 706px) {
    font-size: 2.5rem;
  }

  @media (max-width: 539px) {
    font-size: 2rem;
  }

  @media (max-width: 350px) {
    font-size: 1.7rem;
  }
`;

export const TextPix = styled.p`
  font-size: 3rem;
  color: ${THEME.WHITE};

  @media (max-width: 706px) {
    font-size: 2rem;
  }

  @media (max-width: 539px) {
    font-size: 1.5rem;
  }

  @media (max-width: 350px) {
    font-size: 1.3rem;
  }
`;

export const ItemsTextWhiteBox = styled.p`
  font-size: 4rem;
  color: ${THEME.GREEN};
  font-weight: 700;
  text-align: center;
  padding: 0 3rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 625px) {
    font-size: 2.8rem;
  }

  @media (max-width: 539px) {
    font-size: 2rem;
  }

  @media (max-width: 410px) {
    font-size: 1.5rem;
  }
`;

export const ItemsTextBlackBox = styled.p<{ color: string }>`
  font-size: 4rem;
  color: ${(props) => props.color};
  font-weight: 700;
  text-align: center;

  @media (max-width: 795px) {
    font-size: 2rem;
  }

  @media (max-width: 403px) {
    font-size: 1.7rem;
  }

  @media (max-width: 330px) {
    font-size: 1.2rem;
  }
`;

export const WrapperTextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  padding-top: 14rem;
`;

export const WrapperWhiteBoxPix = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;

  @media (max-width: 1436px) {
    flex-direction: column;
  }
`;

export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${THEME.WHITE};
  padding: 4rem 7rem;
  border-radius: 2rem;
  margin-top: 15rem;

  @media (max-width: 625px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 539px) {
    padding: 2.5rem 4rem;
  }

  @media (max-width: 444px) {
    padding: 1.5rem 3rem;
    gap: 1rem;
  }

  @media (max-width: 346px) {
    padding: 1.5rem 2rem;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 539px) {
    gap: 1rem;
  }
`;

export const DotList = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 444px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const ContainerPix = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 539px) {
    gap: 0.5rem;
  }
`;

export const WrapperIconAndTextPix = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 539px) {
    gap: 2rem;
  }
`;

export const WrapperKeyPix = styled(WrapperIconAndTextPix)`
  border-bottom: 0.5rem solid ${THEME.WHITE};
`;

export const Icons = styled.img`
  width: 5.8rem;
  height: 5.3rem;

  @media (max-width: 706px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerPartnerDonor = styled(motion.div)`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 6rem;

  @media (max-width: 600px) {
    padding-top: 5rem;
  }
`;

export const WrapperTextPartnerDonor = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
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

  @media (max-width: 706px) {
    font-size: 2.5rem;
    width: 40rem;
  }

  @media (max-width: 490px) {
    font-size: 2rem;
    width: 35rem;
  }

  @media (max-width: 407px) {
    font-size: 1.8rem;
    width: 30rem;
  }
`;

export const ContainerPersonalHelp = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 6.5rem;
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
  width: 85%;
  background-color: ${THEME.GRAY};
  padding: 3.6rem 3rem;
  border-radius: 2rem 0 0 2rem;
  gap: 2.5rem;
  margin-left: auto;

  @media (max-width: 403px) {
    margin-left: none;
    border-radius: 2rem;
    margin: 0 2rem;
  }
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
