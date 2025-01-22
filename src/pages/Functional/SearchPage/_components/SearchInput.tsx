import React from "react";
import * as S from "./SearchInput.styles";
import SearchIcon from "../../../../assets/icons/SearchIcon.svg?react";

interface SearchInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  setIsTouched: React.Dispatch<React.SetStateAction<boolean>>;
  handleSearch: () => void;
  isButtonDisabled: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  query,
  setQuery,
  isError,
  setIsTouched,
  handleSearch,
  isButtonDisabled,
}) => {
  const handleClear = () => {
    setQuery(""); // 검색어 초기화
  };

  return (
    <S.Container $isError={isError}>
      <S.InputWrapper>
        <S.SearchInput
          placeholder="도로명 또는 지번을 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsTouched(true)}
        />
        {query && (
          <S.ClearButton onClick={handleClear}>
            ⨉
          </S.ClearButton>
        )}
      </S.InputWrapper>
      <S.SearchButton
        $disabled={isButtonDisabled}
        onClick={handleSearch}
        disabled={isButtonDisabled}
      >
        <SearchIcon />
      </S.SearchButton>
    </S.Container>
  );
};

export default SearchInput;


