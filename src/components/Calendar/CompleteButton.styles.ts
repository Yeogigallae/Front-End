import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Toast = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #434343; 
  color: #fff; 
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  z-index: 10;
`;

