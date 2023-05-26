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

export const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 9.3rem;
  z-index: 20;

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

export const NavItem = styled(Link)<{ color: string }>`
  font-size: 3rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.color};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const DivSideBar = styled(motion.div)`
  display: none;
  width: 3rem;
  height: 3rem;
  margin-right: 3.7rem;

  @media (max-width: 1290px) {
    display: flex;
  }
`;

export const ContainerSideBar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 7rem 0;
  position: fixed;
  top: 100;
  right: 0;
  width: 40%;
  height: 100%;
  background-color: ${THEME.GRAY};
  opacity: 0.7;

  @media (max-width: 865px) {
    width: 100%;
  }
`;
