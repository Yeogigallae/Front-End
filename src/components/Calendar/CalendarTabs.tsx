import React from "react";
import * as S from "./CalendarTabs.styles";

interface CalendarTabsProps {
  activeTab: "date" | "flexible";
  onTabChange: (tab: "date" | "flexible") => void;
}

const CalendarTabs: React.FC<CalendarTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <S.TabGroup>
      <S.TabButton
        $active={activeTab === "date"}
        onClick={() => onTabChange("date")}
      >
        날짜 지정
      </S.TabButton>
      <S.TabButton
        $active={activeTab === "flexible"}
        onClick={() => onTabChange("flexible")}
      >
        유연한 선택
      </S.TabButton>
    </S.TabGroup>
  );
};

export default CalendarTabs;
