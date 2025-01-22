import * as S from "../../_components/Vote.styles";
import ResultCard from "./ResultCard";
import { voteData } from "../../voteData";

export default function VoteResult({
  type,
  onNext,
}: {
  type: "찬성" | "반대";
  onNext: () => void;
}) {
  const step = type === "찬성" ? "찬성확인" : "반대확인";
  
  return (
    <>
      <ResultCard step={step} onNext={onNext} />
      <S.Content>
        {voteData.nickName}님이 여행 투표를 올렸습니다. <br />
        48시간 이후 종료됩니다.
      </S.Content>
    </>
  );
}


