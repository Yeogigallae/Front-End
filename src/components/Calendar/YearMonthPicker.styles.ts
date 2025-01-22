import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

export const YearDial = styled.div`
  display: flex;
  overflow-x: auto; 
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  gap: 16px;
  width: 100%;
  max-width: 90%;
  justify-content: center;
  padding: 8px 0;
  margin: 0 auto; 

  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const YearItem = styled.div<{ $selected: boolean }>`
  flex: 0 0 auto; 
  scroll-snap-align: center; 
  font-size: ${({ $selected }) => ($selected ? "16px" : "16px")};
  font-weight: "normal"
  color: ${({ $selected }) => ($selected ? "#fff" : "#999")};
  opacity: ${({ $selected }) => ($selected ? 1 : 0.5)};
  transform: ${({ $selected }) => ($selected ? "scale(1.05)" : "scale(1)")};
  transition: transform 0.4s ease, font-size 0.4s ease, color 0.4s ease;
  cursor: pointer;
  margin: 0 6px;
`;

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
  width: 100%;
`;

export const MonthItem = styled.div<{ $selected: boolean }>`
  text-align: center;
  padding: 8px;
  font-size: 14px;
  font-weight: ${({ $selected }) => ($selected ? "bold" : "normal")};
  color: ${({ $selected }) => ($selected ? "#fff" : "#6e6e6e")};
  background-color: ${({ $selected }) => ($selected ? "#3b46f1" : "#2e2e2e")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ $selected }) =>
      $selected ? "#3b46f1" : "#444444"};
  }
`;


