import { useState } from "react";
import * as S from "./Styles";
import Card from "../../../components/Card";
import closeBtn from "../../../assets/icons/closeBtn.svg";
import openBtn from "../../../assets/icons/openBtn.svg";
import { getBudgetType } from "./getBudgetType";
import { BudgetDay } from "../../../apis/budget/types";

interface BudgetInfoCardProps {
    budgetDay: BudgetDay[] | undefined;
}

export default function BudgetInfoCard({ budgetDay }: BudgetInfoCardProps) {
    const [openDays, setOpenDays] = useState<{ [key: string]: boolean }>({});

    const toggleDay = (day: string) => {
        setOpenDays((prev) => ({ ...prev, [day]: !prev[day] }));
    };

    if (!budgetDay) return null;

    return (
        <S.BudgetInfoCard>
            <Card.Title>
                아래 정보를 통해
                <br />
                예산을 만들었어요!
            </Card.Title>
            {
                budgetDay?.map((dayData) => (
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
            }
        </S.BudgetInfoCard>
    );
}
