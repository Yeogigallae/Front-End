import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  color: #ccc;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fontFamily.semiBold};
`;

export const WeekDay = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 1rem;
`;

export const Day = styled.div<{
  $isToday?: boolean;
  $isCurrentMonth?: boolean;
  $isInRange?: boolean;
  $isSelected?: boolean;
  $isStart?: boolean;
  $isEnd?: boolean;
}>`
  width: 2.875rem;
  height: 2.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isInRange, $isSelected }) =>
    $isSelected ? "#4f46e5" : $isInRange ? "#2c2c5e" : "transparent"};
  color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "#fff" : "#666")};
  border-radius: ${({ $isStart, $isEnd }) =>
    $isStart || $isEnd ? "50%" : "50%"};
  cursor: pointer;

  &:hover {
    background-color: #3d46f1;
    border-radius: 50%;
  }
`;

