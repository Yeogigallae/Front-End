import VoteResult from "../VoteResult";

export default function Overview({
  type,
  onNext,
}: {
  type: "찬성" | "반대";
  onNext: () => void;
}) {
  return (
    <>
      <VoteResult type={type} onNext={onNext} />
    </>
  );
}


