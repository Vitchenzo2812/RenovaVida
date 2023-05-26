import styled, { css } from "styled-components";
import { THEME } from "../../styles/Theme";

export const Menu = styled.div<{ isOpened: boolean }>`
  display: flex;
  flex-direction: column;
  width: 4.4rem;
  height: max-content;
  cursor: pointer;
  gap: 1rem;
  position: relative;

  transition: 0.5s;

  div {
    height: 0.5rem;
    width: 4.4rem;
    background: ${THEME.GRAY};
  }
  div {
    transition: all 0.2s ease-in-out;
  }
  ${(props) =>
    props.isOpened &&
    css`
      div:nth-child(2) {
        display: none;
      }

      div:nth-child(1) {
        transform: rotate(-45deg) translateY(0.9rem);
      }
      div:nth-child(3) {
        transform: rotate(45deg) translateY(-0.9rem);
      }
    `}
`;
