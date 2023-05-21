import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as S from "./styled";
import { useEffect } from "react";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
    transform: ["translateY(10rem)", "translateY(0)"],
  },
  hidden: { opacity: 0, scale: 0 },
};

export default function AboutUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <S.Container id="sobre-nós">
      <S.MotionDiv ref={ref} initial="hidden" animate={controls} variants={variants}>
        <S.WrapperAboutUsImage>
          <S.ImageGroup src="/event1.jpeg" alt="Grupo de Instituto RenovaVida" />
          <S.WrapperAboutUsText>
            <S.Title>RenovaVida</S.Title>
            <S.Text>
              Iniciado em 2001, a instituição RenovaVida trabalha na restauração dos lares. Contando com a parceiria de
              profissionais, é importante lembrar que continuaremos a prestar apoio aos dependentes químicos na
              orientação/internação, pois essa também é uma parte importante na harmonia familiar.
            </S.Text>
          </S.WrapperAboutUsText>
        </S.WrapperAboutUsImage>
      </S.MotionDiv>
    </S.Container>
  );
}
