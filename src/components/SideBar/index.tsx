import * as S from "./styled";

export default function SideBar({ data }: { data: boolean }) {
  return (
    <S.Menu isOpened={data}>
      <div></div>
      <div></div>
      <div></div>
    </S.Menu>
  );
}
