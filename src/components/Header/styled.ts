import Link from "next/link";
import styled from "styled-components";
import { THEME } from "../../styles/Theme";
import { motion } from "framer-motion";

export const MotionDiv = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${THEME.WHITE};
  z-index: 10;
`;

export const MotionSideBar = styled(motion.div)`
  width: 100%;
  background: #fff;
`;

export const MotionMenu = styled(motion.nav)`
  display: none;

  @media (max-width: 1290px) {
    display: flex;
  }
`;

export const MotionButton = styled(motion.button)`
  background-color: transparent;
`;

export const Logo = styled.img`
  width: 12.6rem;
  height: 12.6rem;
  cursor: pointer;

  @media (max-width: 1290px) {
    margin-left: 3.7rem;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 9.3rem;

  @media (max-width: 1290px) {
    justify-content: space-between;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 6.7rem;

  @media (max-width: 1290px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  font-size: 3rem;
  font-family: var(--font-family);
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  color: ${THEME.BLACK};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
