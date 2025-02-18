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