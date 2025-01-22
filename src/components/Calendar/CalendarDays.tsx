import React from "react";
import * as S from "./CalendarDays.styles";
import { getDaysInMonth, getWeekDays } from "./utils/Calendar.utils";
import { isDateInRange, isStartDate, isEndDate, createDateFromDay } from "./utils/Days.utils";
import Card from "../Card";


interface CalendarDaysProps {
  year: number;
  month: number;
  startDate: Date | null;
  endDate: Date | null;
  onDayClick: (date: Date) => void;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalendarDays: React.FC<CalendarDaysProps> = ({
  year,
  month,
  startDate,
  endDate,
  onDayClick,
  setCurrentDate,
}) => {
  const daysInMonth = getDaysInMonth(year, month);
  const weekDays = getWeekDays();

  const handleDayClick = (day: typeof daysInMonth[number]) => {
    const targetDate = createDateFromDay(day.year, day.month, day.date);

    // 월 또는 연도가 변경되면 현재 날짜를 업데이트
    if (day.month !== month || day.year !== year) {
      setCurrentDate(createDateFromDay(day.year, day.month, 1));
    }

    onDayClick(targetDate);
  };

  return (
    <S.CalendarContainer>
      <S.WeekDays>
        {weekDays.map((day, index) => (
          <S.WeekDay key={`weekday-${index}`}>{day}</S.WeekDay>
        ))}
      </S.WeekDays>

      <Card.Divider />

      <S.Days>
        {daysInMonth.map((day, index) => (
          <S.Day
            key={`day-${day.year}-${day.month}-${day.date}-${index}`}
            $isToday={day.isToday}
            $isCurrentMonth={day.isCurrentMonth}
            $isInRange={isDateInRange(createDateFromDay(day.year, day.month, day.date), startDate, endDate)}
            $isSelected={isStartDate(createDateFromDay(day.year, day.month, day.date), startDate) || isEndDate(createDateFromDay(day.year, day.month, day.date), endDate)}
            $isStart={isStartDate(createDateFromDay(day.year, day.month, day.date), startDate)}
            $isEnd={isEndDate(createDateFromDay(day.year, day.month, day.date), endDate)}
            onClick={() => handleDayClick(day)}
          >
            {day.date}
          </S.Day>
        ))}
      </S.Days>
    </S.CalendarContainer>
  );
};

export default CalendarDays;
