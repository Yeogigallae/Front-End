import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { Button } from "../../../../components/Button";
import Card from "../../../../components/Card";
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import ConfirmMessage from "../../ConfirmPage/_components/ConfirmFailCard/ConfirmMessage";
import * as S from "./../../_components/Vote.styles";
import VoteSkeleton from "./SkeletonVoteCard";
import VoteButtons from "./VoteButton";

export default function VoteCard({
  onAgree,
  onDisagree,
  showConfirmMessage,
  isConfirm,
}: {
  onAgree?: () => void;
  onDisagree?: () => void;
  showConfirmMessage?: boolean;
  isConfirm: boolean;
}) {
  const { tripInfo } = useTripInfoContext();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(delay);
  }, []);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("클립보드에 복사되었습니다:", text);
    });
  };

  const formatTripMonths = (startDate: string, endDate: string) => {
    const startMonth = new Date(startDate).getMonth() + 1;
    const endMonth = new Date(endDate).getMonth() + 1;
    return `${startMonth}~${endMonth}월`;
  };

  if (loading) return <VoteSkeleton />;
  if (!tripInfo) return <p>⚠️ 여행 정보가 존재하지 않습니다.</p>;

  return (
    <Card>
      {showConfirmMessage && (
        <>
          <ConfirmMessage />
          <Button size="large" onClick={() => navigate("/")}>
            {"확인"}
          </Button>
        </>
      )}

      <Card.Image>
        <img
          src={tripInfo.imageUrl}
          alt="Vote Image"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1.5rem",
            objectFit: "cover",
          }}
        />
      </Card.Image>

      <S.CustomWrapper>
        <S.CustomCardItem label="장소">
          <span>{tripInfo.customLocation || "정보 없음"}</span> <br />
          <span>{tripInfo.location || "주소 정보 없음"}</span>
        </S.CustomCardItem>
        <S.IconWrapper onClick={() => handleCopyToClipboard(tripInfo.masterName)}>
          <LinkIcon />
        </S.IconWrapper>
      </S.CustomWrapper>

      <Card.Divider />
      <Card.Item label="금액">{tripInfo.price || "가격 미정"}</Card.Item>

      <Card.Divider />
      <Card.Item label="기간">
        {tripInfo.startDate && tripInfo.endDate
          ? `최소 ${tripInfo.minDays ?? 1}박 ~ 최대 ${(tripInfo.maxDays ?? 7) - 1}박 / ${formatTripMonths(
              tripInfo.startDate,
              tripInfo.endDate
            )}`
          : "기간 미정"}
      </Card.Item>

      <S.CustomSpacer />

      {isConfirm ==  true && (
        <VoteButtons onAgree={onAgree} onDisagree={onDisagree} />
      )}
    </Card>
  );
}  