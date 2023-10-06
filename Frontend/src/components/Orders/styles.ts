import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  display: flex;
  gap: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    max-width: 1000px
  }

  @media (max-width: 992px) {
    max-width: 90%
  }

`;