import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0; 
  display: flex;
  flex-direction: column; 
  gap: 0.563rem;

  font-family: ${({ theme }) => theme.fontFamily.semiBold};
`;

export const VoteButton = styled.button<{ $isSelected: boolean; $selectedColor: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: #fff;
  background-color: ${({ $isSelected, $selectedColor }) =>
    $isSelected ? $selectedColor : "rgba(255, 255, 255, 0.065)"};
  position: relative;
  cursor: default; 
  pointer-events: none; 
  border: none;
  overflow: hidden; 
  font-family: ${({ theme }) => theme.fontFamily.semi};

  span {
    position: relative;
    z-index: 2; 
    font-family: ${({ theme }) => theme.fontFamily.medium};
  }

  ${({ $isSelected }) =>
    !$isSelected &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5.75rem; 
      height: 100%;
      background-color: #434343;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      z-index: 1;
    }
  `}
`;

export const Text = styled.div`
  position: relative;
  z-index: 2; 
  font-size: 0.875rem;
  font-weight: 300;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.938rem; 
`;

export const VoteCounter = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
  margin-left: 0.5rem;
`;

export const VoteMessage = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: semi-bold;
  color: #fff;
  line-height: 1.5;
  gap: 0.25rem;

  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

