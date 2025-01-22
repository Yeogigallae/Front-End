import styled from "styled-components";

export const Container = styled.div<{ $isError: boolean }>`
  display: flex;
  align-items: center;
  background-color: #222; 
  border-radius: 6.25rem; 
  padding: 0.813rem 1.25rem;
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: #6E6E6E; 
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.medium};

  &::placeholder {
    color: #6E6E6E; 
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6E6E6E; 
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const SearchButton = styled.button<{ $disabled: boolean }>`
  background-color: transparent;
  border: none;
  color: white;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;


