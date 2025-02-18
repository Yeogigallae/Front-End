import * as S from "./VoteContent.styles";

export default function VoteContent({ voteData }: { voteData: any }) {
  return (
    <S.Wrapper>
      <S.Content>
        {voteData.userName}님의 투표 정보입니다.
      </S.Content>
    </S.Wrapper>
  );
}
