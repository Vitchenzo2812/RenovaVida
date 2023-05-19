import { THEME } from "../../styles/Theme";
import * as S from "./styled";

export default function NotFound() {
  return (
    <S.Container>
      <S.WrapperAllTexts>
        <S.WrapperText404>
          <S.Error404 color={THEME.GREEN}>4</S.Error404>
          <S.Error404 color={THEME.ORANGE}>0</S.Error404>
          <S.Error404 color={THEME.RED}>4</S.Error404>

          <div>
            <S.MessageError404 color={THEME.LIGHT_GRAY} size={6} weight={400}>
              Mas está
            </S.MessageError404>
            <S.MessageError404 color={THEME.AQUA} size={8} weight={700}>
              tudo bem!
            </S.MessageError404>
          </div>
        </S.WrapperText404>

        <S.Phrase>
          <S.MessagePageNoExists>
            Essa página que você está procurando <strong>não existe.</strong>
          </S.MessagePageNoExists>
        </S.Phrase>
      </S.WrapperAllTexts>
      <S.Button href="/">Voltar ao início</S.Button>
    </S.Container>
  );
}
