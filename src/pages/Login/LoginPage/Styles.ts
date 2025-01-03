import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor || '#f0f0f0'};
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textColor || '#333'};
`;
