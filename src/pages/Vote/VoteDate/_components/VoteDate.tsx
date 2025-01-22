import Calendar from "../../../../components/Calendar/Calendar";

export default function VoteDate({
  onNext,
}: {
  onNext: () => void; 
}) {
  return (
    <>
      <Calendar onComplete={onNext} /> 
    </>
  );
}


