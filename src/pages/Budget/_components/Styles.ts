import styled from "styled-components";
import Card from "../../../components/Card";

export const BudgetCard = styled(Card)`
    padding-bottom: 0.875rem;
`;
export const BudgetInfoCard = styled(Card)`
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
`;

export const Title = styled(Card.Title)`
    text-align: center;
    justify-content: space-between;

    > :last-child {
        justify-content: space-between;
    }
`;

export const Text = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.regular};
    font-size: 0.875rem;
    color: white;
`;

export const Logo = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;

export const IconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    bottom: 0;
    justify-content: center;
    align-items: center;
    margin-top: auto;

    svg {
        width: 1.5rem;
        height: 1.5em;
    }
`;
export const CustomWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0;
    margin-top: 0.5rem;
`;

//info card

export const DayHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding-bottom: 0.25rem;
`;

export const DayContent = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`;

export const BudgetItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.25rem;
`;

export const BudgetIcon = styled.div`
    height: 2.875rem;
    width: 2.875rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.disabled};
`;

export const Icon = styled.img`
    width: 1rem;
    height: 1rem;
`;

export const BudgetDetails = styled.div`
    flex: 1;
    align-self: flex-start;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    line-height: 1.35rem;
`;

export const BudgetName = styled.div`
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    color: white;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 9rem;
`;

export const BudgetCategory = styled.div`
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.GrayText};
`;

export const BudgetCost = styled.div`
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    color: ${({ theme }) => theme.colors.primary};
    align-self: flex-start;
`;

export const Day = styled.div`
    font-size: 1rem;
    color: white;
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
`;
export const Toggle = styled.div`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.GrayText};
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
`;
