import { useEffect, useState } from "react";
import { FirstDayItinerary } from "../../../../apis/upcomingCourse/types";
import Card from "../../../../components/Card";
import Map from "../../../../components/Map";
import CourseTitle from "../../_components/CourseTitle";
import CoursePlaces from "../../_components/CoursePlaces";
import { RecommendCard, UpComingButton } from "./UpComingCourse.style";
import { RouteDetail } from "../../../../apis/map/types";
import { getCarDirection } from "../../../../apis/map";

// Place 인터페이스
interface Place {
    id: number;
    name: string;
    coordinates: { lat: number; lng: number };
}

// FirstDayItinerary 데이터를 변환하는 함수
const formatFirstDayData = (data: FirstDayItinerary | null) => {
    if (!data || !data.places || data.places.length === 0) return null;

    const places: Place[] = data.places.map((place) => ({
        id: place.id,
        name: place.placeName,
        coordinates: { lat: place.latitude, lng: place.longitude },
    }));

    return places.length > 1
        ? {
              start: places[0],
              end: places[places.length - 1],
              waypoints: places.slice(1, places.length - 1),
          }
        : null;
};

interface UpComingCourseCardProps {
    dailyRoutes: FirstDayItinerary;
}

export default function UpComingCourseCard({ dailyRoutes }: UpComingCourseCardProps) {
    const [routeDetail, setRouteDetail] = useState<RouteDetail | null>(null);

    const formattedFirstDayData = formatFirstDayData(dailyRoutes);
    console.log("✅ [UpComingCourseCard] formattedFirstDayData:", formattedFirstDayData);

    useEffect(() => {
        const fetchRouteDetail = async () => {
            if (!formattedFirstDayData) return;

            const { start, end, waypoints } = formattedFirstDayData;

            const route = await getCarDirection(
                {
                    lat: start.coordinates.lat,
                    lng: start.coordinates.lng,
                    name: "",
                },
                {
                    lat: end.coordinates.lat,
                    lng: end.coordinates.lng,
                    name: "",
                },
                waypoints.map((place) => ({ name: place.name, lat: place.coordinates.lat, lng: place.coordinates.lng }))
            );
            setRouteDetail(route.routes[0]); // 하위 컴포넌트에 전달할 데이터
        };

        fetchRouteDetail();
    }, [formattedFirstDayData]);

    console.log("✅ [UpComingCourseCard] routeDetail:", routeDetail);

    if (!formattedFirstDayData) {
        return (
            <Card>
                <Card.Title>여행 코스가 존재하지 않습니다.</Card.Title>
            </Card>
        );
    }

    return (
        <RecommendCard>
            <UpComingButton disabled size="large" color="secondary">
                {`${dailyRoutes.day} 코스 시작 예정`}
            </UpComingButton>

            <Card.Image>{routeDetail && <Map width="100%" height="100%" dailyRoutes={routeDetail} level={3} />}</Card.Image>

            <Card.Item>
                <CourseTitle caption="코스 AI 추천" content={`${formattedFirstDayData.waypoints.length + 2}명 참여`} />
            </Card.Item>

            <Card.Item>{routeDetail ? <CoursePlaces places={routeDetail} /> : <div>경로 정보를 불러올 수 없습니다.</div>}</Card.Item>
        </RecommendCard>
    );
}
