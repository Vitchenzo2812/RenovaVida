import * as S from "./styled";

export default function Initial() {
  return (
    <S.Container>
      <S.MotionDivText
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <S.WrapperTitle>
          <S.Title>Projeto</S.Title>
          <S.RenovaVida>RenovaVida</S.RenovaVida>
        </S.WrapperTitle>
      </S.MotionDivText>
      <S.WrapperAllItems>
        <S.PositionDivFirstPhrase>
          <S.MotionDivText
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <S.TextInitial size={5} weight={700}>
              Há 21 anos
            </S.TextInitial>
            <S.TextInitial size={3} weight={400}>
              Abraçando vidas e <br /> renovando lares.
            </S.TextInitial>
          </S.MotionDivText>
        </S.PositionDivFirstPhrase>
        <S.PositionDivSecondPhrase>
          <S.MotionDivText
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <S.TextInitial size={5} weight={700}>
              Ação Social
            </S.TextInitial>
            <S.TextInitial size={3} weight={400}>
              Que leva amor, esperança <br /> e igualdade às familias
            </S.TextInitial>
          </S.MotionDivText>
        </S.PositionDivSecondPhrase>
      </S.WrapperAllItems>
    </S.Container>
  );
}
