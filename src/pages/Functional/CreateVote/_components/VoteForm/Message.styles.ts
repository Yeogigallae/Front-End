import styled from "styled-components";

// 메시지 입력
export const MessageInput = styled.textarea`
  width: 100%;
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  resize: none;
  text-align: center;
  white-space: pre-line;
  font-family: ${({ theme }) => theme.fontFamily.bold};

  &::placeholder {
    color: #626262;
  }
    
  &:focus {
    outline: none; 
    border: none; 
  }
`;

