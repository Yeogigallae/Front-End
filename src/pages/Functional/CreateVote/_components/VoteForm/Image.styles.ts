import styled from "styled-components";

// 이미지 플레이스홀더
export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 10.625rem;
  background-color: transparent; 
  border-radius: 1.5rem; 
  border: 0.5px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #434343; 
  margin-bottom: 1.375rem; 
  font-size: 1rem;
`;

export const Default = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Icon = styled.img`
`;

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: regular;
  color: #6e6e6e; 
`;
