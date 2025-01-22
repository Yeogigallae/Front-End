import React, { useState, useEffect } from "react";
import * as S from "./Styles";
import { searchPlaceWithZip } from "../../../apis/searchAddress/index";
import SearchInput from "./_components/SearchInput";
import ResultList from "./_components/ResultList";
import Pagination from "./_components/Pagination";

interface SearchPageProps {
  onPlaceSelect: (placeName: string) => void; // onPlaceSelect 속성 추가
}

interface Place {
  id: string;
  place_name: string;
  zone_no: string | null;
  road_address_name?: string;
  address_name?: string;
  x: number;
  y: number;
}

const SearchPage: React.FC<SearchPageProps> = ({ onPlaceSelect }) => {
  const [query, setQuery] = useState<string>(""); 
  const [isTouched, setIsTouched] = useState<boolean>(false); 
  const [isError, setIsError] = useState<boolean>(false); 
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true); 
  const [results, setResults] = useState<Place[]>([]); 
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const [selectedResult, setSelectedResult] = useState<string | null>(null); 
  const [loading, setLoading] = useState<boolean>(false); 
  const ITEMS_PER_PAGE = 5; 

  useEffect(() => {
    if (query.trim() !== "") {
      setIsError(false);
      setIsButtonDisabled(false);
    } else {
      setIsError(true);
      setIsButtonDisabled(true);
    }
  }, [query]);

  const handleSearch = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      console.log("검색어를 입력하지 않았습니다.");
      alert("검색어를 입력해주세요.");
      return;
    }

    setLoading(true);
    setIsError(false);

    try {
      const fetchedResults: Place[] = [];
      let isEnd = false;
      let page = 1;

      while (!isEnd && fetchedResults.length < 100) {
        const data: Place[] = await searchPlaceWithZip({ query: trimmedQuery, page, size: 15 });
        fetchedResults.push(...data);

        isEnd = data.length < 15;
        page += 1;
      }

      if (fetchedResults.length === 0) {
        console.log("검색 결과가 없습니다.");
        console.log(onPlaceSelect);
        console.log("isTouched 상태:", isTouched);
      } else {
        console.log("최종 검색 결과:", fetchedResults);
      }

      setResults(fetchedResults.slice(0, 50));
      setCurrentPage(1);
    } catch (error) {
      console.error("검색 실패:", error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  // 항목 선택 처리 함수
  const handleSelectItem = (selected: { id: string | null; placeName: string | null }) => {
    setSelectedResult(selected.id);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 현재 페이지 결과 계산
  const paginatedResults = results.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      {/* 검색 입력 */}
      <SearchInput
        query={query}
        setQuery={setQuery}
        isError={isError}
        handleSearch={handleSearch}
        isButtonDisabled={isButtonDisabled}
        setIsTouched={setIsTouched} // 필수 속성 전달
      />

      {/* 검색 결과 정보 */}
      {!loading && results.length > 0 && (
        <S.ResultWrapper>
          주소 검색결과 총 {results.length}건
        </S.ResultWrapper>
      )}

      {/* 결과 리스트 */}
      {!loading && !isError && results.length > 0 ? (
        <ResultList
          results={paginatedResults}
          selectedResult={selectedResult}
          handleSelectItem={handleSelectItem}
        />
      ) : null}

      {/* 페이지네이션 */}
      {!loading && !isError && results.length > ITEMS_PER_PAGE ? (
        <Pagination
          currentPage={currentPage}
          totalItems={results.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
        />
      ) : null}
    </>
  );
};

export default SearchPage;


