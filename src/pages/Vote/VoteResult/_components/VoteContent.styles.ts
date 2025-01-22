import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const Content = styled.div`
  font-size: 0.875rem;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;


