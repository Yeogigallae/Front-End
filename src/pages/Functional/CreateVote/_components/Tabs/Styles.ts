import styled from "styled-components";
import { Button } from "../../../../../components/Button";
import { Card } from "../../../../../components/Card/Card.styles";

export const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  background-color: transparent;
  radius: 1rem;
  margin-bottom: 1rem; 
`;

export const StyledButton = styled(Button)<{ $isActive: boolean }>`
  flex: 1; 
  background-color: ${({ $isActive }) => ($isActive ? "#222222" : "#252525")};
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#616161")};
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;

  &:not(:last-child) {
    margin-right: 0.5rem; 
  }
`;
