import React, { useEffect } from "react";
import * as S from "./SearchMap.style";

interface MapProps {
  center: { x: string; y: string };
  results: { x: string; y: string; place_name: string }[];
}

const MapSearch: React.FC<MapProps> = ({ center, results }) => {
  useEffect(() => {
    const loadKakaoMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("카카오 맵 API가 로드되지 않았습니다.");
        return;
      }

      const mapContainer = document.getElementById("map");
      if (!mapContainer) return;

      // 지도 옵션 설정
      const mapOption = {
        center: new window.kakao.maps.LatLng(Number(center.y), Number(center.x)),
        level: 3,
      };

      // 지도 생성
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 지도 크기 업데이트
      const updateMapSize = () => {
        mapContainer.style.width = "100%";
        mapContainer.style.height = "15rem";
        map.relayout();
      };

      updateMapSize(); // 초기 크기 설정
      window.addEventListener("resize", updateMapSize); // 반응형 처리

      // 마커 생성
      results.forEach((result) => {
        const markerPosition = new window.kakao.maps.LatLng(Number(result.y), Number(result.x));

        const markerImageSrc =
      "data:image/svg+xml," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" viewBox="0 0 30 35">
          <path fill="#3b46f1" d="M15 0c8.3 0 15 6.7 15 15 0 12.5-15 20-15 20S0 27.5 0 15C0 6.7 6.7 0 15 0z"/>
          <circle cx="15" cy="15" r="8" fill="white"/> 
          <text x="15" y="19" text-anchor="middle" fill="#3b46f1" font-size="12px" font-weight="regular">1</text>
        </svg>
      `);


        const markerImageSize = new window.kakao.maps.Size(35, 50);
        const markerImage = new window.kakao.maps.MarkerImage(markerImageSrc, markerImageSize);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          map: map,
          image: markerImage, // 번호 포함된 사용자 정의 마커
        });

        // InfoWindow 설정
        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:12px;">${result.place_name || `위치`}</div>`,
        });

        // 마우스 이벤트 추가
        
        window.kakao.maps.event.addListener(marker, "mouseover", () => {
          infowindow.open(map, marker);
        });

        window.kakao.maps.event.addListener(marker, "mouseout", () => {
          infowindow.close();
        });
      });

      return () => {
        window.removeEventListener("resize", updateMapSize); // 이벤트 리스너 정리
      };
    };

    const initializeKakaoMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        const script = document.createElement("script");
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_REST_API_KEY&libraries=services`;
        script.async = true;
        script.onload = loadKakaoMap;
        document.head.appendChild(script);
      } else {
        loadKakaoMap();
      }
    };

    initializeKakaoMap();
  }, [center, results]);

  return (
    <S.StyledCard>
      <S.Map id="map" />
    </S.StyledCard>
  );
};

export default MapSearch;


