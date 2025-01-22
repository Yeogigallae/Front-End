import { searchPlace } from './searchPlace';
import { fetchZipForPlace } from './searchZip';
import { KakaoPlaceSearchParams } from './types';

/**
 * 장소 검색 및 우편번호 결합 함수
 * @param params KakaoPlaceSearchParams - 검색 파라미터
 * @returns Promise<any[]> - 우편번호가 포함된 장소 데이터
 */

export const searchPlaceWithZip = async (
  params: KakaoPlaceSearchParams
): Promise<any[]> => {
  try {
    const placeData = await searchPlace(params);

    // 장소 데이터에 우편번호 추가
    const placesWithZip = await Promise.all(
      placeData.documents.map((document) => fetchZipForPlace(document))
      
    );

    return placesWithZip;
  } catch (error) {
    console.error('Error while fetching places with zip codes:', error);
    throw error;
  }
};
