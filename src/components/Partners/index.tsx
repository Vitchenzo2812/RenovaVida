import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { THEME } from "../../styles/Theme";
import * as S from "./styled";

type Content = {
  image: string;
  altImage: string;
  color: string;
};

const variants = {
  openSection: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      x: 1,
      ease: "easeInOut",
    },
  },

  dot: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },

  hidden: {
    opacity: 0,
    x: "-100%",
  },
};

const data: Content[] = [
  {
    image: "/partner1.svg",
    altImage: "Logo Supermercado Dia",
    color: THEME.AQUA,
  },
  {
    image: "/partner2.svg",
    altImage: "Logo Tapeçaria N.formatos",
    color: THEME.GREEN_DOT,
  },
  {
    image: "/partner4.svg",
    altImage: "Logo Repouso para Idosos Solar das Mercedes",
    color: THEME.RED,
  },
  {
    image: "/partner3.svg",
    altImage: "Logo Chazeria & Clínica de Saúde Estrela Vitta",
    color: THEME.PINK,
  },
];

export default function Partners() {
  const [centerPartner, setCenterPartner] = useState<number>(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("openSection");

    const timer = setInterval(() => {
      setCenterPartner((old) => (old + 1) % data.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [controls, inView]);

  const leftPartner = (centerPartner + data.length - 1) % data.length;
  const rightPartner = (centerPartner + 1) % data.length;

  return (
    <S.Container id="parceiros">
      <S.MontionDiv ref={ref} animate={controls} initial="hidden" variants={variants}>
        <S.Title>Parceiros</S.Title>
      </S.MontionDiv>

      <S.WrapperCarouselWithDot>
        <S.WrapperPartnersLogo>
          {[leftPartner, centerPartner, rightPartner].map((partner, index) => (
            <div key={index}>
              <S.MontionDiv key={data[partner].altImage} initial="hidden" animate="visible" variants={variants}>
                <S.ImagePartner
                  src={data[partner].image}
                  alt={data[partner].altImage}
                  havefocus={`${partner === centerPartner}`}
                />
              </S.MontionDiv>
            </div>
          ))}
        </S.WrapperPartnersLogo>
        <S.DotDivs>
          {data.map((dot, index) => (
            <S.CarouselDots
              key={index}
              animate="dot"
              variants={variants}
              havefocus={`${index === centerPartner}`}
              color={dot.color}
            />
          ))}
        </S.DotDivs>
      </S.WrapperCarouselWithDot>
    </S.Container>
  );
}
