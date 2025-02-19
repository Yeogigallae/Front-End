/// <reference types="kakao.maps.d.ts" />

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { RouteDetail } from '../../apis/map/types';

declare global {
  interface Window {
    kakao: typeof kakao;
  }
}

const Map = ({
  width = '100%',
  height = '400px',
  dailyRoutes,
  level = 3
}: {
  width: string;
  height: string;
  dailyRoutes: RouteDetail;
  level: number;
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const polylineRef = useRef<kakao.maps.Polyline[]>([]);
  const markerRef = useRef<kakao.maps.CustomOverlay[]>([]);
  const { kakao } = window;

  // 맵 인스턴스 생성
  useEffect(() => {
    if (!mapRef.current) return;
    
    const { origin } = dailyRoutes.summary;
    const options: kakao.maps.MapOptions = {
      center: new kakao.maps.LatLng(origin.y, origin.x),
      level,
    };
    
    const mapInstance = new kakao.maps.Map(mapRef.current, options);
    setMap(mapInstance);
  }, []);

  // 경로 데이터로 지도에 표시
  useEffect(() => {
    if (!map || !dailyRoutes) return;
    
    clearMapObjects();
    drawRoute(dailyRoutes);
  }, [map, dailyRoutes]);

  const clearMapObjects = () => {
    polylineRef.current.forEach((polyline) => {
      polyline.setMap(null);
    });
    polylineRef.current = [];

    markerRef.current.forEach((marker) => {
      marker.setMap(null);
    });
    markerRef.current = [];
  };

  const drawRoute = (routeData: RouteDetail) => {
    if(!map) return;

    const bounds = new kakao.maps.LatLngBounds();
    
    const { origin, destination, waypoints } = routeData.summary;
    
    // waypoints가 없는 경우
    if (waypoints.length === 0) {
      const markerPosition = new kakao.maps.LatLng(origin.y, origin.x);
      
      const customOverlay = new kakao.maps.CustomOverlay({
        position: markerPosition,
        content: `
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 35">
            <path fill="#3b46f1" d="M15 0c8.3 0 15 6.7 15 15 0 12.5-15 20-15 20S0 27.5 0 15C0 6.7 6.7 0 15 0z"/>
            <circle cx="15" cy="15" r="6" fill="white"/> 
            <text x="15" y="19" text-anchor="middle" fill="#3b46f1" font-size="8px" font-weight="bold">${1}</text>
          </svg>`,
        map: map
      });

      markerRef.current.push(customOverlay);
      bounds.extend(markerPosition);
      map.setCenter(markerPosition);
      return;
    }

    // waypoints가 있는 경우의 기존 로직
    const allPoints = [
      origin,
      ...waypoints,
      destination
    ];

    allPoints.forEach((point, index) => {
      const markerPosition = new kakao.maps.LatLng(point.y, point.x);
      
      //마커 숫자로 표시
      const customOverlay = new kakao.maps.CustomOverlay({
        position: markerPosition,
        content: `
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 35">
            <path fill="#3b46f1" d="M15 0c8.3 0 15 6.7 15 15 0 12.5-15 20-15 20S0 27.5 0 15C0 6.7 6.7 0 15 0z"/>
            <circle cx="15" cy="15" r="6" fill="white"/> 
            <text x="15" y="19" text-anchor="middle" fill="#3b46f1" font-size="8px" font-weight="bold">${index+1}</text>
          </svg>`,
        map: map
      });
      
      markerRef.current.push(customOverlay);
      bounds.extend(markerPosition);
    });

    // 경로 라인 그리기
    routeData.sections.forEach((section) => {
      const linePath: kakao.maps.LatLng[] = [];
      if(!section.roads) return;

      section.roads.forEach(road => {
        road.vertexes.forEach((_, index) => {
          if (index % 2 === 0) {
            const point = new kakao.maps.LatLng(
              road.vertexes[index + 1], 
              road.vertexes[index]
            );
            linePath.push(point);
            bounds.extend(point);
          }
        });
      });

      const polyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 5,
        strokeColor: `${theme.colors.primary}`,
        strokeOpacity: 0.7,
        strokeStyle: 'solid'
      }); 

      polyline.setMap(map);
      polylineRef.current.push(polyline);
    });

    map.setBounds(bounds);
  };

  return (
    <MapContainer 
      ref={mapRef} 
      width={width} 
      height={height}
    />
  );
};

const MapContainer = styled.div<{ width: string; height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  background-color:#f8f8f8;
`;

export default Map;