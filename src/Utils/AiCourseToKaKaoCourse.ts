import { IAiCourseResponse } from "../apis/course/types";
import { getCarDirection } from "../apis/map";
import { Route } from "../apis/map/types";

//카카오 코스 정보 타입
interface Place {
    id: number;
    name: string;
    coordinates: { lat: number; lng: number; }
}

export const AiCourseToKaKaoCourse = async (aiCourse: IAiCourseResponse): Promise<Route[]> => {
    try {
        //일별 장소들을 분리하여 배열로 변환
        const dailyPlaces: Place[][] = aiCourse.result.dailyItineraries.map(day => 
            day.places.map(place => ({
                id: place.id,
                name: place.placeName,
                coordinates: {
                    lat: place.latitude,
                    lng: place.longitude
                }
            }))
        );

        const promises = dailyPlaces.map(places => {
            if (places.length === 0) return Promise.resolve(null);
            if (places.length === 1) {
                // 장소가 하나인 경우 특별한 Route 객체 생성
                return Promise.resolve({
                    trans_id: "single_point",
                    routes: [{
                        summary: {
                            origin: {
                                name: places[0].name,
                                x: places[0].coordinates.lat,
                                y: places[0].coordinates.lng
                            },
                            destination: {
                                name: places[0].name,
                                x: places[0].coordinates.lat,
                                y: places[0].coordinates.lng
                            },
                            waypoints: []
                        },
                        sections: []
                    }]
                });
            }

            const start = { name: places[0].name, lat: places[0].coordinates.lat, lng: places[0].coordinates.lng };
            const end = { name: places[places.length - 1].name, lat: places[places.length - 1].coordinates.lat, lng: places[places.length - 1].coordinates.lng };
            const waypoints = places.slice(1, -1).map(place => ({
                name: place.name,
                lat: place.coordinates.lat,
                lng: place.coordinates.lng
            }));

            return getCarDirection(start, end, waypoints);
        });

        const results = await Promise.all(promises);
        return results.filter((route): route is Route => route !== null);
    } catch(error) {
        console.error("AiCourseToKaKaoCourse 오류:", error);
        return [];
    }
}

