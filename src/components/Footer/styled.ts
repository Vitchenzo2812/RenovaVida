import styled from "styled-components";
import { THEME } from "../../styles/Theme";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.7rem;
  padding: 3.3rem 0;
`;

export const Text = styled.p`
  color: ${THEME.BLACK};
  font-size: 3rem;
`;

export const RenovaVida = styled.p`
  font-size: 4rem;
  font-weight: 700;
  background: ${THEME.LINEAR};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -text-fill-color: transparent;
`;
