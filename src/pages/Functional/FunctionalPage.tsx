import React, { useState } from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import CreateCalendarPage from "../Functional/CreateCalendar/CreateCalendar";
import SearchPage from "../Functional/SearchPage/SearchPage";
import CreateVote from "../Functional/CreateVote/_components/CreateVote";
import * as S from "./_components/Functional.styles";

const FunctionalFunnel: React.FC = () => {
  const { Funnel, Step, setStep } = useFunnel("생성");

  // 선택된 장소 이름 상태 관리
  const [selectedPlaceName, setSelectedPlaceName] = useState<string | null>(null);

  return (
    <S.Container>
      <Funnel>
        {/* 생성 화면 */}
        <Step name="생성">
          <CreateVote
            onCalendar={() => setStep("캘린더")}
            onSearch={() => setStep("주소검색")}
            selectedPlaceName={selectedPlaceName} 
          />
        </Step>

        {/* 캘린더 화면 */}
        <Step name="캘린더">
          <CreateCalendarPage />
        </Step>

        {/* 주소 검색 화면 */}
        <Step name="주소검색">
          <SearchPage
            onPlaceSelect={(placeName: string) => {
              setSelectedPlaceName(placeName); 
            }}
          />
        </Step>
      </Funnel>
    </S.Container>
  );
};

export default FunctionalFunnel;


