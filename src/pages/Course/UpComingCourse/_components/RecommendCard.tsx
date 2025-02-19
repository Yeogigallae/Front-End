import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Card";
import * as S from "./UpComingCourse.style";

export default function RecommendCard() {
    const navigate = useNavigate(); // ✅ 페이지 이동을 위한 useNavigate 훅 사용

    return (
        <Card>
            <S.Recommend.RecommendContainer>
                <S.Recommend.RecommendTitle> {"추천 기능"} </S.Recommend.RecommendTitle>

                <S.Recommend.RecommendButtonWrapper>
                    <S.Recommend.RecommendButton onClick={() => navigate("/course/upcoming")}>{"AI가 짜준 코스를 바탕으로 예산 짜러 가기"}</S.Recommend.RecommendButton>
                    <S.Recommend.RecommendText onClick={() => navigate("/")}>{"예산 안 짜고 홈으로 가기"}</S.Recommend.RecommendText>
                </S.Recommend.RecommendButtonWrapper>
            </S.Recommend.RecommendContainer>
        </Card>
    );
}
