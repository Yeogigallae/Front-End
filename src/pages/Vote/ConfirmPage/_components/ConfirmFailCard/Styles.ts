import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  padding: 20px 0;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const TruncatedText = styled.div`
  dispaly: block;
  width: 100%; 
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  color: #007bff;
  font-family: ${({ theme }) => theme.fontFamily.medium};

  &:hover {
    color: #0056b3;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;
