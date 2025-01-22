import React, { useRef, useEffect, useState } from "react";
import * as S from "./YearMonthPicker.styles";

interface YearMonthPickerProps {
  currentYear: number;
  currentMonth: number; // 1부터 시작하는 값으로 전달받아야 함
  onSelectYear: (year: number) => void;
  onSelectMonth: (month: number) => void;
  onSelect?: (selectedYear: number, selectedMonth: number) => void;
  closePicker: () => void;
}

const YearMonthPicker: React.FC<YearMonthPickerProps> = ({
  currentYear,
  currentMonth, // 1부터 시작
  onSelectYear,
  onSelectMonth,
  onSelect,
  closePicker,
}) => {
  const [years] = useState<number[]>(() =>
    Array.from({ length: 31 }, (_, i) => currentYear - 5 + i)
  );
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(currentMonth); 
  const yearDialRef = useRef<HTMLDivElement>(null);

  // 연도 변경
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setSelectedMonth(null); // 연도 변경 시 월 초기화
    onSelectYear(year);
  };

  // 월 변경
  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
    onSelectMonth(month);
    if (onSelect) onSelect(selectedYear, month); // 선택된 연도와 월 전달
    closePicker(); // Picker 닫기
  };

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScrollStop = () => {
      if (!yearDialRef.current) return;

      const { scrollLeft, clientWidth } = yearDialRef.current;
      const centerPosition = scrollLeft + clientWidth / 2;
      const closestIndex = Math.round(centerPosition / 70);
      const newSelectedYear = years[closestIndex];

      if (newSelectedYear !== selectedYear) {
        handleYearChange(newSelectedYear);
      }
    };

    const container = yearDialRef.current;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollStop, 300);
    };

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [years, selectedYear]);

  return (
    <S.Wrapper>
      {/* 연도 선택 */}
      <S.YearDial ref={yearDialRef}>
        {years.map((year, index) => (
          <S.YearItem
            key={index}
            $selected={year === selectedYear}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </S.YearItem>
        ))}
      </S.YearDial>

      {/* 월 선택 */}
      <S.MonthGrid>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
          <S.MonthItem
            key={month}
            $selected={month === selectedMonth}
            onClick={() => handleMonthChange(month)}
          >
            {month}월
          </S.MonthItem>
        ))}
      </S.MonthGrid>
    </S.Wrapper>
  );
};

export default YearMonthPicker;


