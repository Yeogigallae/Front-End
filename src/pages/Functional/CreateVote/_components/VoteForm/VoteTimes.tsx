import React from "react";
import * as S from "../../../_components/Functional.styles";

const VoteTimes: React.FC<{
  selectedTime: string | null; 
  onTimeChange: (time: string) => void; 
}> = ({ selectedTime, onTimeChange }) => {
  const timeOptions = ["30분", "60분", "4시간", "6시간"];

  return (
    <S.ButtonContainer>
      {timeOptions.map((time) => (
        <S.TimeButton
          key={time}
          $isActive={selectedTime === time}
          onClick={() => onTimeChange(time)}
        >
          {time}
        </S.TimeButton>
      ))}
    </S.ButtonContainer>
  );
};

export default VoteTimes;


