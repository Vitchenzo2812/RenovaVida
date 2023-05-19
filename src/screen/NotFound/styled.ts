import Link from "next/link";
import styled from "styled-components";
import { THEME } from "../../styles/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 6.9rem;
`;

export const WrapperAllTexts = styled.div``;

export const WrapperText404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: ${THEME.WHITE};
  font-family: var(--font-family);
  font-size: 3rem;
  font-weight: 700;
  background-color: ${THEME.AQUA};
  padding: 1.9rem 6.8rem;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${THEME.AQUA};
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 675px) {
    font-size: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`;

export const Error404 = styled.h1<{ color: string }>`
  font-size: 16rem;
  font-weight: 700;
  color: ${(props) => props.color};

  @media (max-width: 1024px) {
    font-size: 12rem;
  }

  @media (max-width: 675px) {
    font-size: 10rem;
  }

  @media (max-width: 375px) {
    font-size: 8rem;
  }
`;

export const MessageError404 = styled.h2<{ color: string; size: number; weight: number }>`
  font-size: ${(props) => `${props.size}rem`};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};

  @media (max-width: 1024px) {
    font-size: ${(props) => `${props.size - 2}rem`};
  }

  @media (max-width: 580px) {
    font-size: ${(props) => `${props.size - 3}rem`};
  }

  @media (max-width: 475px) {
    font-size: 4rem;
  }

  @media (max-width: 425px) {
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;

export const MessagePageNoExists = styled.p<{ bold?: boolean }>`
  font-size: 4rem;
  font-weight: ${(props) => props.bold && 700};
  color: ${THEME.LIGHT_GRAY};
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 378px) {
    font-size: 2rem;
  }
`;

export const Phrase = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
