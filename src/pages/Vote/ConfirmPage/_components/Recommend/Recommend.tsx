import React from "react";
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/Button";

const ConfirmSuccessCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <S.RecommendComponent>
      <S.Content>추천 기능</S.Content>
      <S.RecommendButton>
        <Button color="primary" size="medium" onClick={() => {
          navigate(`/course`);
          }}
        >
          {"AI코스 짜기"}
        </Button>
        <Button color="primary" size="medium" onClick={() => {
          navigate(`/budget`);
          }}
        >
          {"예산 정하기"}
        </Button>
        <Button color="primary" size="medium">{"물품 리스트 작성"}</Button>
      </S.RecommendButton>
    </S.RecommendComponent>
  );
};

export default ConfirmSuccessCard;
