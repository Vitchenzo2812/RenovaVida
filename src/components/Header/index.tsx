import Link from "next/link";
import { useCallback, useState } from "react";
import SideBar from "../SideBar";
import * as S from "./styled";
import { easeInOut } from "framer-motion";
import { THEME } from "../../styles/Theme";

const variants = {
  open: {
    x: "0%",

    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: easeInOut,
    },
  },

  close: {
    x: "100%",

    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: easeInOut,
    },
  },
};

export default function Header() {
  const itemsNavBar = ["Eventos", "Sobre nós", "Parceiros", "Como Ajudar", "Contato"];
  const [activeSideBar, setActiveSideBar] = useState<boolean>(false);
  const handleActive = useCallback(() => setActiveSideBar((old) => !old), [setActiveSideBar]);

  return (
    <>
      <S.Container>
        <S.MotionButton whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          <Link href="/">
            <S.Logo src="/logo.svg" alt="Logo RenovaVida" />
          </Link>
        </S.MotionButton>
        <S.Navbar>
          {itemsNavBar.map((item, index) => {
            const linkItem = item.toLocaleLowerCase().replace(" ", "-");
            return (
              <S.MotionButton key={index} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                <S.NavItem color={THEME.BLACK} href={`#${linkItem}`}>
                  {item}
                </S.NavItem>
              </S.MotionButton>
            );
          })}
        </S.Navbar>
        <S.DivSideBar onClick={handleActive} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          <SideBar data={activeSideBar} />
        </S.DivSideBar>
      </S.Container>
      {activeSideBar && (
        <S.ContainerSideBar variants={variants} initial="close" animate={activeSideBar ? "open" : "close"}>
          {itemsNavBar.map((item, index) => {
            const linkItem = item.toLocaleLowerCase().replace(" ", "-");
            return (
              <S.MotionButton
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveSideBar(false)}
              >
                <S.NavItem color={THEME.WHITE} href={`#${linkItem}`}>
                  {item}
                </S.NavItem>
              </S.MotionButton>
            );
          })}
        </S.ContainerSideBar>
      )}
    </>
  );
}
