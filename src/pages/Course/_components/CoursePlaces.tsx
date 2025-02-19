import * as S from "./Course.style";
import { Section } from "../../../apis/map/types";

import Marker from "../../../assets/icons/Marker.svg?react"
import { RouteDetail } from "../../../apis/map/types";

export default function CoursePlaces({ 
    places, 
    overview = false 
}: { 
    places: RouteDetail,
    overview?: boolean 
}) {
    const { summary, sections } = places;
    const allPlaces = [
        summary.origin,
        ...summary.waypoints,
        summary.destination
    ];

    const displayPlaces = (overview && allPlaces.length > 2)
        ? allPlaces.slice(0, 2)
        : allPlaces;

    // 만약 시작, 끝 점이 같을 경우
    // 즉 코스가 하나일 경우
    if(allPlaces.length === 2 && allPlaces[0].x == allPlaces[1].x && allPlaces[0].y == allPlaces[1].y){
        return (
            <S.CoursePlaces.PlaceWrapper>
                <PlaceItem place={allPlaces[0]} isLast={true} sectionInfo={null} />
            </S.CoursePlaces.PlaceWrapper>
        );
    }

    return (
        <S.CoursePlaces.PlaceWrapper>
            {displayPlaces.map((place, index) => (
                <PlaceItem 
                    key={index}
                    place={place}
                    isLast={false}
                    sectionInfo={index < sections.length ? sections[index] : null}
                />
            ))}
        </S.CoursePlaces.PlaceWrapper>
    );
}

interface PlaceItemProps {
    place: { name: string };
    isLast: boolean;
    sectionInfo: Section | null;
}

function PlaceItem({ place, isLast, sectionInfo }: PlaceItemProps) {

    const convertDistance = (distance: number) => {
        return (distance / 1000).toFixed(1);
    }

    const lineDistance = sectionInfo?.distance ? sectionInfo.distance/100 : 0;

    return (
        <>
            <S.CoursePlaces.PlaceNameWrapper>
                <S.CoursePlaces.MarkerWrapper>
                    <Marker/>
                </S.CoursePlaces.MarkerWrapper>
                {place.name}
            </S.CoursePlaces.PlaceNameWrapper>

            {!isLast && sectionInfo && (
                <S.CoursePlaces.PlaceDistanceWrapper>
                    <S.CoursePlaces.PlaceLine line={lineDistance}/>
                    {convertDistance(sectionInfo.distance)}km
                    {" "}
                    {`${Math.round(sectionInfo.duration / 60)}분`}
                </S.CoursePlaces.PlaceDistanceWrapper>
            )}
        </>
    );
} 