import React from "react";
import Card from "../../../../components/Card";
import * as S from "../../_components/Vote.styles"
import { voteData } from "../../voteData";
import { theme } from "../../../../styles/theme";

const DurationInfo: React.FC = () => {
  return (
    <S.Wrapper theme={theme}>
        <Card.Item label="기간">날짜지정 : {voteData.duration}</Card.Item>
    </S.Wrapper>
  );
};

export default DurationInfo;


