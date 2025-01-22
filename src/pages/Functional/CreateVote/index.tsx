import CreateVote from "../../Functional/CreateVote/_components/CreateVote";

export default function Overview({
  onCalendar,
  onSearch,
}: {
  onCalendar: () => void;
  onSearch: () => void;
}) {
  return (
    <>
      <CreateVote onCalendar={onCalendar} onSearch={onSearch} />
    </>
  );
}


