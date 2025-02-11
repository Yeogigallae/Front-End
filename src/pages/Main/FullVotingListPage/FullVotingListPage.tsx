import * as S from "./Styles";
import FullVotingItem from "../_components/VotingItem/FullVotingItem";
import TostModal from "../_components/TostModal/TostModal";
import { useOutletContext } from "react-router-dom";
import { useGetVoting } from "../../../react-query/queries/main/Voting/queries";
import { FullVotingCardSkeleton } from "../_components/CardSkeleton";

type LayoutContextType = {
    isModalVisible: boolean;
    handleCloseModal: () => void;
    selectedFilter: string;
    handleFilterChange: (filter: string) => void;
};

export default function FullVotingListPage() {
    const { data: votingRooms = [], isLoading, error } = useGetVoting();

    // 로딩 상태에서 콘솔 로그
    if (isLoading) {
        console.log("Loading full voting rooms...");
    }

    // 에러 상태에서 콘솔 로그
    if (error) {
        console.error("Error loading full voting rooms:", error);
    }

    const { isModalVisible, handleCloseModal, selectedFilter, handleFilterChange } = useOutletContext<LayoutContextType>();
    return (
        <S.Container>
            <FullVotingItem rooms={votingRooms ?? []} selectedFilter={selectedFilter} />
            <FullVotingCardSkeleton />

            <TostModal isVisible={isModalVisible} onClose={handleCloseModal} onFilterChange={handleFilterChange} />
        </S.Container>
    );
}
