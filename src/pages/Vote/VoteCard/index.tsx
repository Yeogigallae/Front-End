import VoteCard from "../VoteCard";

export default function OverView({
  onAgree,
  onDisagree,
}: {
  onAgree: () => void;
  onDisagree: () => void;
}) {
  return (
    <>
        <VoteCard
          onAgree={onAgree}
          onDisagree={onDisagree}
        />
    </>
  );
}


