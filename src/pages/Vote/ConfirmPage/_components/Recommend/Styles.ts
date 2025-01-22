import styled from "styled-components";

export const RecommendComponent = styled.div`
  margin: 1rem 1.25rem;
  height: 112px;
  background-color: #222222;
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px; 
  font-weight: medium; 
  color: #ffffff; 
`;

export const RecommendButton = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 5px; 
  flex-wrap: wrap;
  width: 100%;

  button {
    font-size: 14px;
    font-weight: medium; 
    padding: 8px 15px; 
    border-radius: 16px; 
  }
`;

