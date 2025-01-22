import styled from "styled-components";
import { Card } from "../../../../../components/Card/Card.styles";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row; 
  align-items: center; 
  gap: 1rem;
  margin: 1rem 0;
  overflow: hidden;
  overflow-x: auto;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  scrollbar-width: none;
  -ms-overflow-style: none; 
  font-family: ${({theme}) => theme.fontFamily.medium};

  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const Slide = styled.button<{ $active: boolean; $isCreateButton?: boolean }>`
  width: 2.688rem;
  height: 2.5rem;
  background-color: ${(props) => (props.$isCreateButton ? "transparent" : "#fff")};
  color: color: ${(props) =>
    props.$isCreateButton
      ? "#bbb" 
      : props.$active
      ? "#3b46f1"
      : "#bbb"};
  border: ${(props) =>
    props.$isCreateButton
      ? "0.125rem solid #3b46f1"
      : props.$active
      ? "0.125rem solid #3b46f1"
      : "0.125rem solid transparent"};
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$isCreateButton ? "transparent" : "#f5f5f5")};
  }
`;

export const Text = styled.span`
  color: #3b46f1;
  font-size: 0.75rem;
  font-weight: bold; 
`;

export const SlideContainer = styled.div<{ $isFirst?: boolean, $isLast?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.25rem 0;
  flex-shrink: 0;
  margin-left: ${({ $isFirst }) => ($isFirst ? "1.5rem" : "0")};
  margin-right: ${({ $isLast }) => ($isLast ? "1.5rem" : "0")};
`;

export const Label = styled.span<{ $active: boolean; $isCreateButton?: boolean }>`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  font-weight: regular;
  color: ${(props) =>
    props.$isCreateButton
      ? "#3b46f1" 
      : props.$active
      ? "#3b46f1"
      : "#bbb"}; 
  text-align: center;
  white-space: nowrap;
`;

