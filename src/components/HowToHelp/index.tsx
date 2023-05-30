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
            <S.Subtitle>Venha fazer parte da nossa família, como coloborador ou profissional voluntário!</S.Subtitle>
          </S.WrapperSubtitles>
          <S.WrapperTextSection>
            <S.TitleSections color={THEME.WHITE}>Faça o bem, doe!</S.TitleSections>
            <S.SubtitleSections color={THEME.WHITE}>
              Seja a ajuda que o outro precisa. As suas doações nos ajudarão a fornecer:
            </S.SubtitleSections>
          </S.WrapperTextSection>
        </S.MotionDiv>

        <S.WrapperWhiteBoxPix>
          <S.WhiteBox>
            {itemsListPix.map((item, index) => (
              <S.List key={index}>
                <S.DotList color={THEME.GREEN} />
                <S.ItemsTextWhiteBox>{item}</S.ItemsTextWhiteBox>
              </S.List>
            ))}
          </S.WhiteBox>

          <S.ContainerPix>
            <S.WrapperIconAndTextPix>
              <S.Icons src="/pix.svg" alt="Icone do Pix" />
              <S.TitlePix>Doe com Pix</S.TitlePix>
            </S.WrapperIconAndTextPix>

            <S.WrapperKeyPix>
              <S.Icons src="/key.svg" alt="Icone chave Pix" />
              <S.TextPix>INSTITUTORENOVAVIDA@GMAIL.COM</S.TextPix>
            </S.WrapperKeyPix>
          </S.ContainerPix>
        </S.WrapperWhiteBoxPix>
      </S.Container>

      <S.ContainerPartnerDonor ref={partnerDonor} initial="hidden" animate={controlsPartnerDonor} variants={variants}>
        <S.WrapperTextPartnerDonor>
          <S.TitleSections color={THEME.GRAY}>Torne-se um doador parceiro!</S.TitleSections>
          <S.SubtitleSections color={THEME.GRAY}>
            Mude a vida de várias pessoas contribuindo mensalmente! Se tornando um doador parceiro, todo mês você recebe
            uma arte como agradecimento de sua ajuda!
          </S.SubtitleSections>
        </S.WrapperTextPartnerDonor>
        <S.ButtonBecomeDonor href="http://forms.gle/rxddFk7pbG1e7iHa6" target="_blank">
          Quero me tornar um!
        </S.ButtonBecomeDonor>
      </S.ContainerPartnerDonor>

      <S.ContainerPersonalHelp ref={personalHelp} initial="hidden" animate={controlsPersonalHelp} variants={variants}>
        <S.WrapperTextPersonalHelp>
          <S.TitleSections color={THEME.GRAY}>Seu dom pessoal também importa!</S.TitleSections>
          <S.SubtitleSections color={THEME.GRAY}>
            Você pode doar o seu próprio trabalho! O seu dom pessoal é uma contribuição fantástica para a gente.
          </S.SubtitleSections>
        </S.WrapperTextPersonalHelp>

        <S.BlackBox>
          <S.ItemsTextBlackBox color={THEME.WHITE}>Exemplos de contribuição:</S.ItemsTextBlackBox>
          <S.WrapperItems>
            {itemsListPersonalHelp.map((item, index) => (
              <S.List key={index}>
                <S.DotList color={THEME.WHITE} />
                <S.ItemsTextBlackBox color={THEME.WHITE}>{item}</S.ItemsTextBlackBox>
              </S.List>
            ))}
          </S.WrapperItems>
        </S.BlackBox>

        <S.WrapperContactUs>
          <S.ItemsTextBlackBox color={THEME.GRAY}>Caso queira ajudar, entre em contato.</S.ItemsTextBlackBox>
        </S.WrapperContactUs>
      </S.ContainerPersonalHelp>
    </>
  );
}
