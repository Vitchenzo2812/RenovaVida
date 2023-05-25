import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import * as S from "./styled";
import { THEME } from "../../styles/Theme";

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

export default function HowToHelp() {
  const itemsList = [
    "Água potável",
    "Alimentação",
    "Abrigo",
    "Serviços de Emergência",
    "Suprimentos Médicos",
    "Roupas",
  ];
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <S.Container id="como-ajudar">
      <S.MotionDiv ref={ref} initial="hidden" animate={controls} variants={variants}>
        <S.Title>Como ajudar?</S.Title>
        <S.WrapperSubtitles>
          <S.Subtitle>Venha fazer parte da nossa família, como</S.Subtitle>
          <S.SubtitleBold>colaborador</S.SubtitleBold>
          <S.Subtitle>ou</S.Subtitle>
          <S.SubtitleBold>profissional voluntário</S.SubtitleBold>
        </S.WrapperSubtitles>

        <S.WrapperTextSection>
          <S.TitleSection color={THEME.WHITE}>Faça o bem, doe!</S.TitleSection>
          <S.TextSection color={THEME.WHITE} size={3}>
            Seja a ajuda que o outro precisa. As suas doações nos ajudarão a fornecer:
          </S.TextSection>
        </S.WrapperTextSection>

        <S.WrapperWhiteBoxPix>
          <S.WhiteBox>
            {itemsList.map((item, index) => (
              <S.List key={index}>
                <S.DotList />
                <S.TextSection color={THEME.GREEN} size={4} weight={700}>
                  {item}
                </S.TextSection>
              </S.List>
            ))}
          </S.WhiteBox>

          <S.ContainerPix>
            <S.WrapperIconAndTextPix>
              <S.Icons src="/pix.svg" alt="Icone do Pix" />
              <S.TextSection color={THEME.WHITE} size={4} weight={700}>
                Doe com Pix
              </S.TextSection>
            </S.WrapperIconAndTextPix>

            <S.WrapperKeyPix>
              <S.Icons src="/key.svg" alt="Icone chave Pix" />
              <S.TextSection color={THEME.WHITE} size={3}>
                INSTITUTORENOVAVIDA@GMAIL.COM
              </S.TextSection>
            </S.WrapperKeyPix>
          </S.ContainerPix>
        </S.WrapperWhiteBoxPix>
      </S.MotionDiv>
    </S.Container>
  );
}
