import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const Content = styled.div`
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center; 
  line-height: 1.3;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;
