import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Card from "../../../../../components/Card";
import LinkIcon from "../../../../../assets/icons/LinkIcon.svg?react";
import ConfirmMessage from "./ConfirmMessage";
import { Button } from "../../../../../components/Button";
import { voteData } from "../../../voteData";

const ConfirmFailCard: React.FC = () => {
  const navigate = useNavigate();

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("클립보드에 복사되었습니다:", text);
    });
  };

  return (
    <>
    <Card>
      <ConfirmMessage />
      <Button size="large" onClick={() => {
        navigate(`/`);
        }}
      >
        {"확인"}
      </Button>

      <Card.Image>  
        <img src={voteData.imageSrc} alt="placeholder" 
        style={{width:"100%",height:"100%",borderRadius:"1.5rem",objectFit:"cover"}} />
      </Card.Image>

      <S.LocationWrapper>
        <Card.Item label="장소">
          <S.TruncatedText>{voteData.location.place}<br />{voteData.location.address}</S.TruncatedText>
        </Card.Item>
        <S.IconWrapper onClick={() => handleCopyToClipboard(voteData.location.place)}>
          <LinkIcon />
        </S.IconWrapper>
      </S.LocationWrapper>

      <Card.Divider />
      <Card.Item label="총액">{voteData.total}</Card.Item>
      
      <Card.Divider />
      <Card.Item label="기간">{voteData.totalDuration}</Card.Item>
    </Card>
    </>
  );
};

export default ConfirmFailCard;
