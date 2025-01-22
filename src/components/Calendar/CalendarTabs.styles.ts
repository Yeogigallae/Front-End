import styled from "styled-components";

export const TabGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  background-color: #434343;
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 106px;  
  height: 36px;  
  margin: 0 5px; 
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#3b46f1" : "#434343")};
  }
`;