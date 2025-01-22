import React from "react";
import * as S from "./ConfrimMessage.styles";

const ConfirmMessage: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Content>
        여행 확정에 실패하셨습니다. <br />
        이 방은 사라집니다.
      </S.Content>
    </S.Wrapper>
  )
}

export default ConfirmMessage;

