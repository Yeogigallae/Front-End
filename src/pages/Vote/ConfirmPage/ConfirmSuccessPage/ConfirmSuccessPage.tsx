import React from "react";
import * as S from "./Styles";
import ConfirmSuccessCard from "../_components/ConfirmSuccessCard/ConfirmSuccessCard";
import Recommend from "../_components/Recommend/Recommend";
import SuccessText from "../_components/SuccessText"

const VoteAgreePage: React.FC = () => {
    return (
        <S.Container>
            <SuccessText />
            <S.VoteCardWrapper>
                <ConfirmSuccessCard />
            </S.VoteCardWrapper>
            <Recommend />
        </S.Container>
    );
};

export default VoteAgreePage;


