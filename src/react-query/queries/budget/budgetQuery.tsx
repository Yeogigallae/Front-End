import { useQuery } from "@tanstack/react-query";
import { getBudgetInfoAndId } from "../../../apis/budget";
import { BudgetResponse } from "../../../apis/budget/types";

export const useGetBudgetInfoAndId = (aiCourseId:string) => {
    return useQuery<{budgetId:string, budgetInfo:BudgetResponse["result"]}>({
        queryKey: ["budget", aiCourseId],
        queryFn: () => getBudgetInfoAndId(aiCourseId!),
        enabled: !!aiCourseId,
        retry: false, 
        refetchOnWindowFocus: false, 
        refetchOnReconnect: false, 
        refetchInterval: false,  
        refetchIntervalInBackground: false,  
    });
}