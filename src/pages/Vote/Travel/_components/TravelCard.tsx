import Card from "./../../../../components/Card"
import { Button } from "../../../../components/Button";
import { voteData } from "../../voteData";
import * as S from "../../_components/Vote.styles";

export default function TravelCard({
  onNext,
}: {
  onNext: () => void; 
}) {
  return (
    <>
      <S.StyledCard>
          <Card.Image>  
            <img src="https://s3-alpha-sig.figma.com/img/19e3/d758/89fc76fe69058e9d77f8b9d8eb86b52a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UD7-M2Kzy6ZypAZp1TcmODXyjkhe9B7i2um316iL6yO4noUirY-KyX2rCFKo1-6AZrianWPaXaaoA5tbU2ZguoL1G-0azGwL1VNVD6Y46adpX5KaGUIZGHJqNscdNBi5t0M1tA5v5CKL4CIhG8OpEfNW3TeA57i3np-iISxtoG8zc8H61trwbw3WCS4p6xg5v5d9e~xE15oGCXJ7gG678mnNuJX8OpVdAFOTPhh7dXkbleZcv2sqQ3ES1T3qOez7awav5iTgkRWyUTWglT9tYTX40IJf7EBX-UD2ffpxovnI926qcAULaKaK-XOXxY9bag14~jRS3SdueUe4xKmjmg__" alt="placeholder" 
            style={{width:"100%",height:"100%",borderRadius:"1.5rem",objectFit:"cover"}} />
          </Card.Image>

          <S.StyledCardTitle>
            {"애드라////"}
            <br />
            {"이 호텔로 여행 어때"}
          </S.StyledCardTitle>

          <Card.Divider />

          <S.StyledItem>
            <Card.Item label="장소">{voteData.city}</Card.Item>
            <Card.Item label="금액">{voteData.price}</Card.Item>
            <Card.Item label="기간">{voteData.duration}</Card.Item>
          </S.StyledItem>

          <Button size="large" onClick={onNext}>{"투표하러 가기"}</Button>
      </S.StyledCard>
    </>
  );
};

