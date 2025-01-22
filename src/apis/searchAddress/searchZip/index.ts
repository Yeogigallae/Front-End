import axios from 'axios';
import { KakaoCoordToAddressResponse } from '../types';

const BASE_COORD_TO_ADDRESS_URL = 'https://dapi.kakao.com/v2/local/geo/coord2address.json';
const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

/**
 * 좌표로 우편번호를 가져오는 함수
 * @param document 장소 데이터 객체
 * @returns Promise<any> - 우편번호가 추가된 장소 데이터
 */

export const fetchZipForPlace = async (document: any): Promise<any> => {
  try {
    const response = await axios.get<KakaoCoordToAddressResponse>(BASE_COORD_TO_ADDRESS_URL, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
      },
      params: { x: document.x, y: document.y },
    });

    const zone_no = response.data.documents[0]?.road_address?.zone_no || null;
    return { ...document, zone_no };
  } catch (error) {
    console.warn('Failed to fetch zip code for:', document.place_name, error);
    return { ...document, zone_no: null }; // 우편번호 실패 시 null 반환
  }
};

