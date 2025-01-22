import Card from "../../../../components/Card";
import { Button } from "../../../../components/Button";
import { voteData } from "../../voteData";
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import DurationInfo from "./DurationInfo";
import * as S from "../../_components/Vote.styles";
import VoteComponent from "./VoteComponent";
import VoteContent from "./VoteContent";
import { theme } from "../../../../styles/theme"; 

export default function ResultCard({
  step,
  onNext,
}: {
  step: "결과" | "찬성확인" | "반대확인";
  onNext: () => void;
}) {
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("클립보드에 복사되었습니다:", text);
    });
  };

  return (
    <S.StyledCard theme={theme}>
        <VoteContent />
        <DurationInfo />
        <VoteComponent step={step}/>

        <Card.Divider />

        <Card.Image>
          <S.Image src={voteData.imageSrc} alt="placeholder" />
        </Card.Image>

        <S.CustomWrapper>
          <S.CustomCardItem label="장소">
            <span>{voteData.location.place}</span> <br />
            <span>{voteData.location.address}</span>
          </S.CustomCardItem>
          <S.IconWrapper onClick={() => handleCopyToClipboard(voteData.location.place)}>
            <LinkIcon />
          </S.IconWrapper>
        </S.CustomWrapper>

        <Card.Divider />
        <Card.Item label="금액">{voteData.price}</Card.Item>

        <Button
          size="large"
          style={{
            backgroundColor: "#434343",
            color: "white",
            marginTop: "0.75rem",
            fontFamily: theme.fontFamily.medium,
          }}
          onClick={onNext}
        >
          {"투표하러 가기"}
        </Button>
    </S.StyledCard>
  );
}


