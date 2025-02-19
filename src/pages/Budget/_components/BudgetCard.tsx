import * as S from "./Styles";
import Card from "../../../components/Card";
import { budgetPageDataMock } from "../../../apis/budget/mocks";
import MoneyBag from "../../../assets/icons/MoneyBag.svg";
import LinkIcon from "../../../assets/icons/LinkIcon.svg?react";

export default function BudgetCard() {
    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log("클립보드에 복사되었습니다:", text);
        });
    };

    return (
        <S.BudgetCard>
            <S.Text>{"AI서포터가 추천하는 예산입니다."}</S.Text>

            <S.Title>
                <S.Logo src={MoneyBag} alt="MoneyBag Logo" />
                {budgetPageDataMock.result.price}  
                <S.Logo src={MoneyBag} alt="MoneyBag Logo" />
            </S.Title>

            <Card.Divider />
            <S.Text>{"아래는 예산 측정 시 고려한 정보 입니다."}</S.Text>

            <Card.Image>
                <img
                    src={budgetPageDataMock.result.imageUrl}
                    alt="여행 대표 이미지"
                    style={{ width: "100%", height: "100%", borderRadius: "1.5rem" }}
                />
            </Card.Image>

            <S.CustomWrapper>
                <Card.Item label="장소">
                    {budgetPageDataMock.result.location} ({budgetPageDataMock.result.customLocation})
                </Card.Item>
                <S.IconWrapper onClick={() => handleCopyToClipboard(budgetPageDataMock.result.location)}>
                    <LinkIcon />
                </S.IconWrapper>
            </S.CustomWrapper>

            <Card.Divider />

            <Card.Item label="기간">
                {budgetPageDataMock.result.startDate} ~ {budgetPageDataMock.result.endDate} ({budgetPageDataMock.result.minDays}일 ~ {budgetPageDataMock.result.maxDays}일)
            </Card.Item>
        </S.BudgetCard>
    );
}
