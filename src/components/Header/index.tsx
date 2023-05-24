import Link from "next/link";
import * as S from "./styled";

export default function Header() {
  const itemsNavBar = ["Eventos", "Sobre nós", "Parceiros", "Como Ajudar", "Contato"];

  return (
    <>
      <S.MotionDiv>
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
                  <S.NavItem href={`#${linkItem}`}>{item}</S.NavItem>
                </S.MotionButton>
              );
            })}
          </S.Navbar>
        </S.Container>
      </S.MotionDiv>
    </>
  );
}
