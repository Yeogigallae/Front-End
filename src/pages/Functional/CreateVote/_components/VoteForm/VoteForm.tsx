import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import * as S from "../../../_components/Functional.styles";
import CalendarIcon from "../../../../../assets/icons/Calender.svg?react";
import Card from "../../../../../components/Card";
import VoteTimes from "./VoteTimes";

export default function VoteForm({
  onCalendar,
  onSearch,
  isVote,
  messageValue,
  onMessageChange,
  selectedTime,
  onTimeChange,
  selectedLocation,
}: {
  onCalendar: () => void;
  onSearch: () => void;
  isVote: boolean;
  messageValue: string;
  onMessageChange: (value: string) => void;
  selectedTime: string | null; 
  onTimeChange: (time: string) => void; 
  selectedLocation: string | null; 
}) {
  return (
    <S.StyledCard>
      <ImagePlaceholder />

      <MessageInput value={messageValue} onChange={onMessageChange} />

      <S.StyledDivider />

      <S.CustomCardItem label="투표 제한 시간">
        <VoteTimes selectedTime={selectedTime} onTimeChange={onTimeChange} />
      </S.CustomCardItem>

      <S.StyledDivider />

      <Card.Item label="장소">
        <S.ClickableText onClick={onSearch}>
          {selectedLocation || "장소를 입력하세요."}
        </S.ClickableText>
      </Card.Item>

      <S.StyledDivider />

      {isVote && (
        <>
          <Card.Item label="가격">
            <S.Input
              type="text"
              placeholder="예) 1박 / 20만원"
            />
          </Card.Item>
          <S.StyledDivider />
        </>
      )}

      {/* 기간 */}
      <Card.Item label="기간">최소 0박 ~ 최대 0박</Card.Item>
      
      {/* 날짜 선택 */}
      <S.StyledCardItem>
        <span className="text">날짜 2024.00.00 ~ 2024.00.00</span>
        <S.IconWrapper onClick={onCalendar} className="icon">
          <CalendarIcon />
        </S.IconWrapper>
      </S.StyledCardItem>
    </S.StyledCard>
  );
}


