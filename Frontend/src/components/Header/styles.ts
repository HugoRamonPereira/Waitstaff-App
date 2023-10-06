import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;

  @media (max-width: 576px) {
    height: 100px
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1300px) {
    max-width: 90%
  }

  @media (max-width: 1200px) {
    max-width: 1000px
  }

  @media (max-width: 992px) {
    max-width: 90%
  }

  @media (max-width: 576px) {
    justify-content: center;
  }

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
      letter-spacing: 0.9px;

      @media (max-width: 992px) {
        font-size: 1.5rem;
      }
    }

    h2 {
      color: #fff;
      font-weight: 300;
      font-size: 1rem;
      opacity: 0.9;
      margin-top: 0.4rem;
      letter-spacing: 0.9px;

      @media (max-width: 992px) {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 576px) {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 30%;

  @media (max-width: 576px) {
    width: 45%
  }
`;