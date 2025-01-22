import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const VoteCardWrapper = styled.div`
  margin: 0.1rem 1.25rem;
`;

