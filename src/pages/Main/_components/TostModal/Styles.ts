import styled, { keyframes } from "styled-components";
import BaseButton from "../../../../components/Button/Button";

const slideUp = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(100%);
        opacity: 0;
    }
`;

export const ModalContent = styled.div`
    background: ${({ theme }) => theme.colors.secondary || "#222222"};
    border-radius: 1.875rem;
    width: 90%;
    max-width: 400px;
    padding: 1rem 1.5rem 2.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;

    animation: ${slideUp} 0.3s ease-out;

    &.hidden {
        animation: ${slideDown} 0.3s ease-in;
    }
`;

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    align-self: flex-end;
    cursor: pointer;
`;

export const Title = styled.h2`
    color: white;
    font-size: 1.125rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const Options = styled.div`
    display: flex;
    background: ${({ theme }) => theme.colors.disabled};
    border-radius: 1.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Option = styled.div<{ selected?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ selected, theme }) => (selected ? `${theme.colors.primary}40` : theme.colors.disabled)};
    padding: 0.875rem 0;
    border-radius: 1.5rem;
    border: 1px solid ${({ selected, theme }) => (selected ? `${theme.colors.primary}` : `transparent`)};
    transition: background 0.3s, border 0.3s;
    text-align: center;
`;

export const Icon = styled.img`
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.5rem;
`;

export const OptionText = styled.span`
    color: white;
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const Button = styled(BaseButton)`
    padding: 0.875rem 0;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    border-radius: 1rem;
    font-size: 1rem;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
    height: 1.25rem;
    width: 1.25rem;
    margin-bottom: 1rem;
    appearance: none;
    background-color: white;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:checked {
        background-color: ${({ theme }) => theme.colors.primary};
    }

    &:checked::before {
        content: "";
        width: 50%;
        height: 50%;
        background-color: white;
        border-radius: 50%;
    }
`;
