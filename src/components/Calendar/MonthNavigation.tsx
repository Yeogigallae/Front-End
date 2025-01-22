import React from "react";
import * as S from "./CalendarHeader.styles";

interface MonthNavigationProps {
  currentYear: number;
  currentMonth: number;
  // onPrevMonth: () => void;
  // onNextMonth: () => void;
  onOpenPicker: () => void;
}

const MonthNavigation: React.FC<MonthNavigationProps> = ({
  currentYear,
  currentMonth,
  onOpenPicker,
}) => {
  return (
    <S.MonthHeader>
      <S.CurrentMonth onClick={onOpenPicker}>
        {`${currentYear}년 ${currentMonth + 1}월`}
      </S.CurrentMonth>
    </S.MonthHeader>
  );
};

export default MonthNavigation;