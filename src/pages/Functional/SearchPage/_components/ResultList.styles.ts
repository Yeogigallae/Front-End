import styled from "styled-components";
import Card from "../../../../components/Card";

export const Results = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  flex-direction: column; 
  gap: 0.75rem; 
  width: 100%;
  border-radius: 1.875rem; 
  background-color: #222222;
  opacity: 1;
  font-family: ${({ theme }) => theme.fontFamily.medium};

  height: auto; 
  overflow-y: auto; 
  overflow-x: hidden;

  -ms-overflow-style: none; 
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
`;

export const NoResults = styled.div`
  font-size: 0.875rem; 
  color: #3b46f1; 
  font-family: ${({ theme }) => theme.fontFamily.semiBold};
`;

export const ResultItem = styled.div<{
  $isFirst?: boolean;
  $isLast?: boolean;
  $isSelected?: boolean; 
}>`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0 1.125rem;
  color: #fff;
  font-size: 0.875rem;

  margin-top: ${({ $isFirst }) => ($isFirst ? "1.25rem" : "0")}; 
  margin-bottom: ${({ $isLast }) => ($isLast ? "1.25rem" : "0")}; 
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const ZipCode = styled.div`
  font-size: 0.875rem; 
  color: #3b46f1; 
  margin-bottom: 0.5rem; 
  text-align: left;
  font-family: ${({ theme }) => theme.fontFamily.semiBold};
`;

export const PlaceName = styled.div`
  font-size: 0.875rem;
  color: #fff;
  margin-bottom: 0.25rem;
  text-align: left;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  line-height: 20px;
`;

export const AddressName = styled.div`
  font-size: 0.875rem; 
  color: #fff; 
  text-align: left;
  font-family: ${({ theme }) => theme.fontFamily.regular}; 
  line-height: 20px;
`;

export const ResultWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const MapButton = styled.div`
  display: flex;
  align-items: center;
  color: #6e6e6e;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
  gap: 0.15rem;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const Divider = styled(Card.Divider)`
  width: calc(100% - 2.25rem); 
  height: 0.031rem; 
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const RotateIcon = styled.div<{ $isRotated: boolean }>`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ $isRotated }) => ($isRotated ? "rotate(180deg)" : "rotate(0deg)")};
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

