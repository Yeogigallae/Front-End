import { useEffect } from "react";
import UpComingCourseCard from "./_components/UpComingCourseCard";
import RecommendCard from "./_components/RecommendCard";
import { useGetCourseInfo } from "../../../react-query/queries/upcomingCourse/queries";
import { UpComingContainer } from "./_components/UpComingCourse.style";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useParams } from "react-router-dom";
import { FirstDayItinerary, FirstDayCourse } from "../../../apis/upcomingCourse/types";

export default function UpComingCoursePage() {
    const { tripPlanId, aiCourseId } = useParams<{ tripPlanId: string; aiCourseId: string }>();
    const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: HeaderConfig) => void }>();

    const { data, isLoading, error } = useGetCourseInfo(Number(tripPlanId), Number(aiCourseId));

    const firstDayCourseData: FirstDayCourse | null = data ?? null;
    const firstDayItinerary: FirstDayItinerary | null = firstDayCourseData?.dailyItineraries[0] ?? null;

    console.log("✅ [UpComingCoursePage] firstDayCourseData:", firstDayCourseData);
    console.log("✅ [UpComingCoursePage] FirstDayItinerary:", firstDayItinerary);

    useEffect(() => {
        if (firstDayCourseData) {
            setHeaderConfig({
                title: firstDayCourseData.roomName,
                number: 5,
                // number: firstDayCourseData.totalRoomMember, //현재 0으로 나와서 임시로 5로 설정
            });
        }
    }, [firstDayCourseData, setHeaderConfig]);

    if (isLoading) {
        return <div>로딩중...</div>;
    }

    if (error || !firstDayItinerary) {
        return <div>코스 정보를 불러오지 못했습니다.</div>;
    }

    return (
        <UpComingContainer>
            <UpComingCourseCard dailyRoutes={firstDayItinerary} />
            <RecommendCard />
        </UpComingContainer>
    );
}
