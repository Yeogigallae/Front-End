import { styled } from "styled-components";
import { Button } from "../../../../components/Button";
import CommonContainer from "../../../../components/Layout/CommonContainer";
import Card from "../../../../components/Card";

export const UpComingButton = styled(Button)`
    background-color: #434343;
    color: #ffffff;
`;
export const UpComingContainer = styled(CommonContainer)`
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    height: calc(100vh - 88px);
`;

export const RecommendCard = styled(Card)`
    width: 100%;
    flex: 1;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Recommend = {
    RecommendButton: styled(Button)`
        width: 100%;
        color: #ffffff;
    `,
    RecommendButtonWrapper: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        padding: 0.25rem;
    `,
    RecommendContainer: styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        width: 100%;
    `,
    RecommendTitle: styled.div`
        font-size: 0.875rem;
        font-family: ${({ theme }) => theme.fontFamily.regular};
        color: white;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    RecommendText: styled.div`
        font-size: 0.75rem;
        font-family: ${({ theme }) => theme.fontFamily.regular};
        color: ${({ theme }) => theme.colors.GrayText || "#0A0A0A"};
    `,
};
