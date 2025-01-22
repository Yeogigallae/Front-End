import React, { useState } from "react";
import * as S from "./CompleteButton.styles";
import { Button } from "../Button";
import { showToastWithMessage, isCompleteEnabled } from "./utils/Complete.utils";

interface CompleteButtonProps {
  startDate: Date | null;
  endDate: Date | null;
  mode: "date" | "flexible";
  onComplete: () => void;
}

const CompleteButton: React.FC<CompleteButtonProps> = ({ startDate, endDate, mode, onComplete }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleCompleteClick = () => {
    if (!startDate || !endDate) {
      if (mode !== "flexible") {
        // 날짜와 유연한 선택 모두 미설정된 경우
        showToastWithMessage(setShowToast, setToastMessage, "날짜를 제대로 설정해주세요");
        return;
      }
    }

    if (mode !== "flexible" && (!startDate || !endDate)) {
      // 유연한 선택 또는 날짜 선택이 하나도 만족되지 않은 경우
      showToastWithMessage(setShowToast, setToastMessage, "유연한 선택을 설정해주세요");
      return;
    }

    onComplete();
  };

  return (
    <S.Footer>
      <Button
        size="large"
        onClick={handleCompleteClick}
        disabled={!isCompleteEnabled(startDate, endDate, mode)}
      >
        {"완료"}
      </Button>

      {/* 토스트 메시지 */}
      {showToast && <S.Toast>{toastMessage}</S.Toast>}
    </S.Footer>
  );
};

export default CompleteButton;
