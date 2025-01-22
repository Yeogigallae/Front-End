import styled from "styled-components";

export const Content = styled.div`
  margin: 1rem 1.25rem;
  height: 48px;
  background-color: #222222;
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`;

export const text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px; 
  font-weight: medium; 
  color: #ffffff; 
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;
