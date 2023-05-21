import { useEffect, useReducer } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as S from "./styled";

type Content = {
  image: string;
  altImage: string;
  subtitle: string;
  url: string;
};

type ReducerProps = {
  type: string;
};

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },

  hidden: { opacity: 0, scale: 0 },

  imagePrevious: {
    transform: ["translateX(10rem)", "translateX(0)"],
    opacity: [0, 0.5, 0.7, 1],
  },

  imageNext: {
    transform: ["translateX(-10rem)", "translateX(0)"],
    opacity: [0, 0.5, 0.7, 1],
  },
};

const data: Content[] = [
  {
    image: "/event1.jpeg",
    altImage: "Imagem referente ao evento Bem Estar",
    subtitle: "Evento Bem-Estar",
    url: "https://www.instagram.com/p/CrtcOYLOGZX/",
  },

  {
    image: "/event2.jpeg",
    altImage: "Imagem referente ao evento Massoterapia",
    subtitle: "Evento de Massoterapia",
    url: "https://www.instagram.com/p/Cp3p2IvuEcL/",
  },

  {
    image: "/event3.jpeg",
    altImage: "Imagem referente ao evento Dia do Sagrado Feminino",
    subtitle: "Evento sobre o Dia do Sagrado Feminino",
    url: "https://www.instagram.com/p/CqdvPY8P-Fm/",
  },

  {
    image: "/event4.jpeg",
    altImage: "Imagem referente ao evento Roda de Conversa",
    subtitle: "Roda de Conversa com educandos do projeto MOVA",
    url: "https://www.instagram.com/p/CpyieAGO9C2/",
  },

  {
    image: "/event5.jpeg",
    altImage: "Imagem referente a palestra Dependência biopsicosocial",
    subtitle: "Palestra sobre Dependência Biopsicosocial",
    url: "https://www.instagram.com/p/CmxSbT0vQ6A/",
  },
];

function reducer(state: number, action: ReducerProps) {
  switch (action.type) {
    case "next":
      if (state === 4) state = -1;
      return state + 1;

    case "previous":
      if (state === 0) state = 5;
      return state - 1;
  }
}

const initialValue = 0;

export default function Events() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const controls = useAnimation();
  const configCarousel = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <S.Container id="eventos">
      <S.MotionDivText ref={ref} initial="hidden" animate={controls} variants={variants}>
        <S.Title>Eventos</S.Title>
      </S.MotionDivText>
      <S.WrapperCarouselSubtitle>
        <S.CarouselDiv>
          <S.MotionButton
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              dispatch({ type: "previous" });
              configCarousel.start("imagePrevious");
            }}
          >
            <S.Arrow src="/arrow.svg" alt="Botão Esquerdo Carrossel" />
          </S.MotionButton>
          <S.MotionDivAnimate animate={configCarousel} initial="visible" variants={variants}>
            <S.imagesCarousel src={data[state].image} alt={data[state].altImage} />
          </S.MotionDivAnimate>
          <S.MotionButton
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              dispatch({ type: "next" });
              configCarousel.start("imageNext");
            }}
          >
            <S.Arrow src="/arrow.svg" side="right" alt="Botão Direito Carrossel" />
          </S.MotionButton>
        </S.CarouselDiv>

        <S.MotionDivText ref={ref} initial="hidden" animate={controls} variants={variants}>
          <S.MotionDivAnimate whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <S.Subtitle href={data[state].url} target="_blank">
              {data[state].subtitle}
            </S.Subtitle>
          </S.MotionDivAnimate>
        </S.MotionDivText>
      </S.WrapperCarouselSubtitle>
    </S.Container>
  );
}
