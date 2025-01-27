import { useState } from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import CreateCalendarPage from "../Functional/CreateCalendar/CreateCalendar";
import SearchPage from "../SearchPage";
import CreateVote from "../Functional/CreateVote/_components/CreateVote";
import CommonContainer from "../../components/Layout/CommonContainer";

export default function FunctionalFunnel() {
  const { Funnel, Step, setStep } = useFunnel("생성");

  // 선택된 장소 이름 상태 관리
  const [selectedPlaceName] = useState<string | null>(null);

  return (
    <CommonContainer>
      <Funnel>
        <Step name="생성">
          <CreateVote
            onCalendar={() => setStep("캘린더")}
            onSearch={() => setStep("주소검색")}
            selectedPlaceName={selectedPlaceName} 
          />
        </Step>

        <Step name="캘린더">
          <CreateCalendarPage />
        </Step>

        <Step name="주소검색">
          <SearchPage />
        </Step>
      </Funnel>
    </CommonContainer>
  );
};

