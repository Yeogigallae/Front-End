// 검색 요청
export interface KakaoPlaceSearchParams {
  query: string; 
  category_group_code?: string; 
  x?: string; 
  y?: string; 
  radius?: number;
  rect?: string; 
  page?: number; 
  size?: number; 
  sort?: 'distance' | 'accuracy'; 
}

// 검색 응답
export interface KakaoPlaceSearchResponse {
  meta: {
    total_count: number;
    pageable_count: number; 
    is_end: boolean; 
    same_name: {
      region: string[]; 
      keyword: string; 
      selected_region: string;
    };
  };
  documents: KakaoPlaceDocument[]; 
}

// 장소 정보
export interface KakaoPlaceDocument {
  id: string; 
  place_name: string; 
  category_name: string; 
  category_group_code: string; 
  category_group_name: string;
  address_name: string; 
  road_address_name: string; 
  x: string; // 경도
  y: string; // 위도
  place_url: string; 
  distance?: string;
}
