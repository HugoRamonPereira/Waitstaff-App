import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #fff;
  border: 1px solid rgba(204, 204, 204, 0.4);
  min-height: 128px;
  border-radius: 0.5rem;
  transition: 0.150s ease-in;
  outline: none;
  margin-top: 1.5rem;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 00.4px;
  flex: 1;

  @media (max-width: 576px) {
    margin-top: 0.7rem;
  }

  @media (max-width: 992px) {
    padding: 20px
  }

  &:hover {
    border: 1px solid #D73035;
    color: #D73035;
    background: #FDF5F6;
    cursor: pointer;

    span {
      color: #D73035;
    }
  }

  strong {
    font-weight: 600;
  }

  & + button {
    margin-top: 1.5rem;
  }

  img {
    margin-top: 0.6rem;
  }

  @media (max-width: 992px) {
    p {
      font-size: 0.75rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;