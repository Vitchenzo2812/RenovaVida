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
  const itemsListPix = [
    "Água potável",
    "Alimentação",
    "Abrigo",
    "Serviços de Emergência",
    "Suprimentos Médicos",
    "Roupas",
  ];

  const itemsListPersonalHelp = [
    "Um psicólogo pode doar um atendimento;",
    "Um serralheiro pode doar seu serviço para uma família necessitada.",
  ];

  const controlsHowToHelp = useAnimation();
  const controlsPartnerDonor = useAnimation();
  const controlsPersonalHelp = useAnimation();
  const [howToHelp, howToHelpInView] = useInView({ triggerOnce: true });
  const [partnerDonor, partnerDonorInView] = useInView({ triggerOnce: true });
  const [personalHelp, personalHelpInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (howToHelpInView) controlsHowToHelp.start("visible");
    if (partnerDonorInView) controlsPartnerDonor.start("visible");
    if (personalHelpInView) controlsPersonalHelp.start("visible");
  }, [
    controlsHowToHelp,
    controlsPartnerDonor,
    controlsPersonalHelp,
    howToHelpInView,
    partnerDonorInView,
    personalHelpInView,
  ]);

  return (
    <>
      <S.Container id="como-ajudar">
        <S.MotionDiv ref={howToHelp} initial="hidden" animate={controlsHowToHelp} variants={variants}>
          <S.Title>Como ajudar?</S.Title>
          <S.WrapperSubtitles>
            <S.Subtitle>Venha fazer parte da nossa família, como</S.Subtitle>
            <S.SubtitleBold>colaborador</S.SubtitleBold>
            <S.Subtitle>ou</S.Subtitle>
            <S.SubtitleBold>profissional voluntário!</S.SubtitleBold>
          </S.WrapperSubtitles>

          <S.WrapperTextSection>
            <S.TextSection color={THEME.WHITE} size={6} weight={700}>
              Faça o bem, doe!
            </S.TextSection>
            <S.TextSection color={THEME.WHITE} size={3}>
              Seja a ajuda que o outro precisa. As suas doações nos ajudarão a fornecer:
            </S.TextSection>
          </S.WrapperTextSection>
        </S.MotionDiv>

        <S.WrapperWhiteBoxPix>
          <S.WhiteBox>
            {itemsListPix.map((item, index) => (
              <S.List key={index}>
                <S.DotList color={THEME.GREEN} />
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
      </S.Container>

      <S.ContainerPartnerDonor ref={partnerDonor} initial="hidden" animate={controlsPartnerDonor} variants={variants}>
        <S.WrapperTextPartnerDonor>
          <S.TextSection color={THEME.GRAY} size={6} weight={700}>
            Torne-se um doador parceiro!
          </S.TextSection>
          <S.TextSection color={THEME.GRAY} size={3}>
            Mude a vida de várias pessoas contribuindo mensalmente!
            <br />
            Se tornando um doador parceiro, todo mês você recebe uma
            <br /> arte como agradecimento de sua ajuda!
          </S.TextSection>
        </S.WrapperTextPartnerDonor>
        <S.ButtonBecomeDonor href="http://forms.gle/rxddFk7pbG1e7iHa6" target="_blank">
          Quero me tornar um!
        </S.ButtonBecomeDonor>
      </S.ContainerPartnerDonor>

      <S.ContainerPersonalHelp ref={personalHelp} initial="hidden" animate={controlsPersonalHelp} variants={variants}>
        <S.WrapperTextPersonalHelp>
          <S.TextSection color={THEME.GRAY} size={6} weight={700}>
            Seu dom pessoal também importa!
          </S.TextSection>
          <S.TextSection color={THEME.GRAY} size={3}>
            Você pode doar o seu próprio trabalho!
            <br />O seu dom pessoal é uma contribuição fantástica para a gente.
          </S.TextSection>
        </S.WrapperTextPersonalHelp>

        <S.BlackBox>
          <S.TextSection color={THEME.WHITE} size={3} weight={700}>
            Exemplos de contribuição:
          </S.TextSection>
          <S.WrapperItems>
            {itemsListPersonalHelp.map((item, index) => (
              <S.List key={index}>
                <S.DotList color={THEME.WHITE} />
                <S.TextSection color={THEME.WHITE} size={3} weight={700}>
                  {item}
                </S.TextSection>
              </S.List>
            ))}
          </S.WrapperItems>
        </S.BlackBox>

        <S.WrapperContactUs>
          <S.TextSection color={THEME.GRAY} size={3}>
            Caso queira ajudar, entre em contato.
          </S.TextSection>
        </S.WrapperContactUs>
      </S.ContainerPersonalHelp>
    </>
  );
}
