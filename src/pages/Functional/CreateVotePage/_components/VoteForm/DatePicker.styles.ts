import styled from "styled-components";

// 날짜 섹션
export const DatePickerWrapper = styled.div`
  margin-bottom: 20px;
  margin-start: 20px;

  & > label {
    display: block;
    color: #ffffff;
    font-weight: 500;
    padding: 0 5px;
  }

  & > input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    padding: 0 5px;
    background-color: transparent;
    color: #ffffff;

    &::placeholder {
      color: #888888;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #555;
  display: block;
  margin-bottom: 30px;
  margin: 0;
  padding: 0; 
`;

export const MinMaxWrapper = styled.div`
  display: flex;
  padding: 4px;
`;

export const MinText = styled.p`
  display: flex;
  margin-top: 5px;
  font-size: 16px;
  color: #777;
`;

export const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
  padding: 4px;
`;

export const LabelSmall = styled.label`
  font-size: 14px;
  color: #777;
`;

export const TextInput = styled.input`
  padding: 0;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #333;
  border-radius: 8px;
  outline: none;
  border: none;
  box-sizing: border-box;
  margin-left: 0;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8; 
  }
`;