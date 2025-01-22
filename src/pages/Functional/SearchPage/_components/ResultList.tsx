import React, { useState } from "react";
import * as S from "./ResultList.styles";
import MapComponent from "./SearchMap/SearchMap";
import ToggleIcon from "../../../../assets/icons/ToggleIcon.svg?react";

interface Result {
  id: string;
  place_name: string;
  zone_no: string | null;
  road_address_name?: string;
  address_name?: string;
  x: number;
  y: number;
}

interface ResultListProps {
  results: Result[];
  selectedResult: string | null;
  handleSelectItem: (selected: { id: string | null; placeName: string | null }) => void;
}

const ResultList: React.FC<ResultListProps> = ({
  results,
  selectedResult,
  handleSelectItem,
}) => {
  const [rotatedId, setRotatedId] = useState<string | null>(null);

  // 항목 선택 처리 함수
  const toggleSelectItem = (id: string, placeName: string) => {
    const isSelected = selectedResult === id;
    handleSelectItem({ id: isSelected ? null : id, placeName: isSelected ? null : placeName });
    setRotatedId(isSelected ? null : id);
    console.log("현재 선택된 항목 ID:", isSelected ? null : id);
  };

  // 결과 배열 유효성 확인
  if (!results || results.length === 0) {
    return (
      <S.Results $isVisible={false}>
        <S.NoResults>검색 결과가 없습니다.</S.NoResults>
      </S.Results>
    );
  }

  return (
    <S.Results $isVisible={results.length > 0}>
      {results.map((result, index) => {
        const isSelected = selectedResult === result.id;

        return (
          <React.Fragment key={result.id}>
            <S.ResultWrapper>
              <S.ResultItem
                $isFirst={index === 0}
                $isLast={index === results.length - 1}
                onClick={() => toggleSelectItem(result.id, result.place_name)}
                $isSelected={isSelected}
              >
                <S.ZipCode>{result.zone_no || "우편번호 없음"}</S.ZipCode>
                <S.PlaceName>{result.place_name}</S.PlaceName>
                <S.InfoContainer>
                  <S.AddressName>
                    {result.road_address_name || result.address_name}
                  </S.AddressName>
                  <S.MapButton>
                    지도
                    <S.RotateIcon $isRotated={rotatedId === result.id}>
                      <ToggleIcon />
                    </S.RotateIcon>
                  </S.MapButton>
                </S.InfoContainer>
              </S.ResultItem>

              {isSelected && (
                <MapComponent
                  center={{
                    x: result.x.toString(),
                    y: result.y.toString(),
                  }}
                  results={[
                    {
                      ...result,
                      x: result.x.toString(),
                      y: result.y.toString(),
                    },
                  ]}
                />
              )}
            </S.ResultWrapper>
            {index < results.length - 1 && <S.Divider />}
          </React.Fragment>
        );
      })}
    </S.Results>
  );
};

export default ResultList;


