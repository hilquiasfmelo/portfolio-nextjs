import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  @media (max-width: 1000px) {
    gap: 2rem;
  }
`;
