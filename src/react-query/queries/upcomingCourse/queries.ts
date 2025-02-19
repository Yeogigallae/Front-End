import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../../apis/upcomingCourse";
import { FirstDayCourse } from "../../../apis/upcomingCourse/types";

export const useGetCourseInfo = (tripPlanId: number, aiCourseId: number) => {
    return useQuery<FirstDayCourse | null>({
        queryKey: ["course", tripPlanId, aiCourseId],
        queryFn: () => getCourse(tripPlanId.toString(), aiCourseId.toString()),
        enabled: !!tripPlanId && !!aiCourseId,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
};
