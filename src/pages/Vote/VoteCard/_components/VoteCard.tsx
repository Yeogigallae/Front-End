import Card from "../../../../components/Card";
import { Button } from "../../../../components/Button";
import { voteData } from "./../../voteData";
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import * as S from "./../../_components/Vote.styles";

export default function VoteCard({
  onAgree,
  onDisagree,
}: {
  onAgree: () => void; 
  onDisagree: () => void; 
}) {
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("클립보드에 복사되었습니다:", text);
    });
  };

  return (
    <S.StyledCard>
        <Card.Image>
          <img
            src={voteData.imageSrc}
            alt="placeholder"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "1.5rem",
              objectFit: "cover",
            }}
          />
        </Card.Image>

        <Card.Item label="장소">{voteData.location.place}<br />{voteData.location.address}</Card.Item>
        <S.IconWrapper onClick={() => handleCopyToClipboard(voteData.location.place)}>
          <LinkIcon />
        </S.IconWrapper>

        <Card.Divider />
        <Card.Item label="금액">{voteData.price}</Card.Item>

        <Card.Divider />
        <Card.Item label="기간">{voteData.duration}</Card.Item>

        <S.TwoSelect>
          <Button size="large" onClick={onDisagree}>
            {"난 못 가.."}
          </Button>
          <Button size="large" onClick={onAgree}>
            {"좋아!"}
          </Button>
        </S.TwoSelect>
    </S.StyledCard>
  );
}
