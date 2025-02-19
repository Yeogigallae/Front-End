import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./Styles";
import BudgetCard from "../_components/BudgetCard";
import BudgetInfoCard from "../_components/BudgetInfoCard";
import BudgetSkeleton from "../_components/BudgetSkeleton";
import { useGetBudgetInfoAndId } from "../../../react-query/queries/budget/budgetQuery";

const BudgetPage: React.FC = () => {
    const { aiCourseId } = useParams<{ aiCourseId?: string }>(); 
    const { data, isLoading, isError } = useGetBudgetInfoAndId(aiCourseId!);

    if (isLoading) return <BudgetSkeleton />;
    if (isError) return <div>Error</div>;

    const budgetInfo = data?.budgetInfo;

    return (
        <S.Container>
            <BudgetCard  />
            <BudgetInfoCard budgetDay={budgetInfo} />
            <S.Text>각 분야별 평균적인 금액을 계산하여 생성된 예산입니다.</S.Text>
        </S.Container>
    );
};

export default BudgetPage;
