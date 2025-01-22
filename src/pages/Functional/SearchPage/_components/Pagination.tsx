import React from "react";
import * as S from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <S.PaginationWrapper>
      <S.ArrowButton
        onClick={handlePrevious}
        $disabled={currentPage === 1}
      >
        {"<"}
      </S.ArrowButton>

      <S.PageIndicator $isActive={true}>{currentPage}</S.PageIndicator>
      <S.Separator>/</S.Separator>
      <S.PageIndicator $isActive={false}>{totalPages}</S.PageIndicator>

      <S.ArrowButton
        onClick={handleNext}
        $disabled={currentPage === totalPages}
      >
        {">"}
      </S.ArrowButton>
    </S.PaginationWrapper>
  );
};

export default Pagination;
