import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.938rem;
  gap: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const Instructions = styled.div`
  font-size: 20px;
  color: #6e6e6e;
  padding: 0 10px;
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.fontFamily.medium};

  ul {
    margin: 10px 0 0 16px;
  }
  li {
    font-size: 16px;
    padding: 2px 0;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  aligh-items: center;
  justify-content: center;
  margin: 1.25rem 0;
  color: #6e6e6e;
  font-weight: regular;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;
