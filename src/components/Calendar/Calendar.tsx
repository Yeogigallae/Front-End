import React, { useState } from "react";
import * as S from "../Calendar/Calender.styles";
import CalendarHeader from "./CalendarHeader";
import YearMonthPicker from "./YearMonthPicker";
import CompleteButton from "./CompleteButton";

const Calendar: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const today = new Date();
  console.log(`오늘 날짜: ${today}`); // 디버깅용
  const [currentDate, setCurrentDate] = useState(today);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isYearMonthPickerVisible, setYearMonthPickerVisible] = useState(false);
  const [mode, setMode] = useState<"date" | "flexible">("date");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  console.log(`현재 연도: ${year}, 현재 월: ${month + 1}`); // 디버깅용

  const handleDateClick = (date: Date) => {
    if (mode === "flexible") {
      console.log("유연한 선택 모드에서는 날짜를 클릭할 수 없습니다.");
      return;
    }
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date >= startDate) {
        setEndDate(date);
      } else {
        setStartDate(date);
      }
    }
  };

  const closePicker = () => {
    setYearMonthPickerVisible(false);
  };

  const handleYearMonthSelect = (selectedYear: number, selectedMonth: number) => {
    console.log(`선택된 연도: ${selectedYear}, 선택된 월: ${selectedMonth}`); // 디버깅용
    const newDate = new Date(selectedYear, selectedMonth -1, 1); // 월은 0부터 시작
    console.log(`설정된 날짜: ${newDate}`); // 디버깅용
    setCurrentDate(newDate);
    setYearMonthPickerVisible(false);
  };

  const handleModeChange = (newMode: "date" | "flexible") => {
    setMode(newMode);
    console.log(`Mode changed to: ${newMode}`);
  };

  return (
    <S.StyledCard>
      {isYearMonthPickerVisible && (
        <YearMonthPicker
          currentMonth={month + 1} 
          currentYear={year}
          onSelectYear={(selectedYear) => setCurrentDate(new Date(selectedYear, currentDate.getMonth(), 1))}
          onSelectMonth={(selectedMonth) => setCurrentDate(new Date(currentDate.getFullYear(), selectedMonth - 1, 1))}
          onSelect={handleYearMonthSelect}
          closePicker={closePicker}
        />
      )}

      <CalendarHeader
        currentYear={year}
        currentMonth={month}
        setCurrentDate={setCurrentDate}
        openYearMonthPicker={() => setYearMonthPickerVisible(true)}
        onModeChange={handleModeChange}
        startDate={startDate}
        endDate={endDate}
        handleDayClick={handleDateClick}
      />

      <CompleteButton
        startDate={startDate}
        endDate={endDate}
        mode={mode}
        onComplete={onComplete}
      />
      
    </S.StyledCard>
  );
};

export default Calendar;


