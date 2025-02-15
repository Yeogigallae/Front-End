import { useState } from "react";
import * as S from "./Styles";
import Card from "../../../components/Card";
import { useGetBudgetInfo } from "../../../react-query/queries/budget/budgetQuery"; 
import { budgetMock } from "../../../apis/budget/mocks"; 
import closeBtn from "../../../assets/icons/closeBtn.svg";
import openBtn from "../../../assets/icons/openBtn.svg";
import { getBudgetType } from "./getBudgetType";

interface BudgetInfoCardProps {
    budgetId: number;
}

export default function BudgetInfoCard({ budgetId }: BudgetInfoCardProps) {
    const [openDays, setOpenDays] = useState<{ [key: string]: boolean }>({});
    const { data, isLoading, isError } = useGetBudgetInfo(budgetId);
    const budgetData = isError ? budgetMock : data;

    const toggleDay = (day: string) => {
        setOpenDays((prev) => ({ ...prev, [day]: !prev[day] }));
    };

    return (
        <S.BudgetInfoCard>
            <Card.Title>
                아래 정보를 통해
                <br />
                예산을 만들었어요!
            </Card.Title>

            {isLoading ? (
                <S.Text>예산 정보를 불러오는 중...</S.Text>
            ) : (
                budgetData?.result?.map((dayData) => (
                    <Card.Item key={dayData.day}>
                        <S.DayHeader onClick={() => toggleDay(dayData.day)}>
                            <S.Day>{dayData.day}</S.Day>
                            <S.Toggle>
                                {openDays[dayData.day] ? (
                                    <S.Icon src={closeBtn} alt="close" />
                                ) : (
                                    <S.Icon src={openBtn} alt="open" />
                                )}
                            </S.Toggle>
                        </S.DayHeader>

                        <Card.Divider />

                        {openDays[dayData.day] && (
                            <S.DayContent>
                                {dayData.assignments.map((assignment, index) => {
                                    const { icon, text } = getBudgetType(assignment.budgetType);

                                    return (
                                        <S.BudgetItem key={index}>
                                            <S.BudgetIcon>
                                                <img src={icon} alt={text} />
                                            </S.BudgetIcon>
                                            <S.BudgetDetails>
                                                <S.BudgetName>{assignment.placeName}</S.BudgetName>
                                                <S.BudgetCategory>{text}</S.BudgetCategory>
                                            </S.BudgetDetails>
                                            <S.BudgetCost>
                                                {assignment.recommendedAmount.toLocaleString()}원
                                            </S.BudgetCost>
                                        </S.BudgetItem>
                                    );
                                })}
                            </S.DayContent>
                        )}
                    </Card.Item>
                ))
            )}
        </S.BudgetInfoCard>
    );
}
