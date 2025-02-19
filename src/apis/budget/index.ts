import { budgetMock } from "./mocks";
import { BudgetIdResponse, BudgetResponse } from "./types";
import { api } from "../Axios";
/**
 * 공통 API 오류 처리 함수
 * @param error 발생한 오류
 * @param fallbackData 대체 데이터 (Mock 데이터)
 * @returns fallbackData 반환
 */

export const getBudgetId = async (aiCourseId:string):Promise<BudgetIdResponse["result"]> => {
    const response = await api.get(`/api/budget/${aiCourseId}/budgetIds`);
    return response.data.result;
}

export const getBudgetInfo = async (budgetId:string):Promise<BudgetResponse["result"]> => {
    try{
        const response = await api.get(`/api/budget/${budgetId}`);
        return response.data.result ;
    }catch(error){
        console.error("API 호출 오류:", error);
        return budgetMock.result;
    }
}

export const generateBudget = async (aiCourseId:string) => {
    const response = await api.post(`/api/budget/aiCourse/${aiCourseId}`);
    return response.data;
}

export const getBudgetInfoAndId = async (aiCourseId:string):Promise<{budgetId:string, budgetInfo:BudgetResponse["result"]}> => {
    const budgetIdArray = await getBudgetId(aiCourseId);

    if(budgetIdArray.length !== 0){
        const budgetId = budgetIdArray[budgetIdArray.length - 1].budgetId;
        const budgetInfo = await getBudgetInfo(budgetId);
        return { budgetId, budgetInfo };
    }
    
    const budgetId = await generateBudget(aiCourseId);
    const budgetInfo = await getBudgetInfo(budgetId);
    return { budgetId, budgetInfo };
}
