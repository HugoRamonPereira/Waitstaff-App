import styled from 'styled-components';

export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  /* This angle bracket before the header means that the styles below it will only be applied to the first and direct child of Board */
  > header {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrdersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 0.5rem;
    transition: 0.150s ease-in;
    outline: none;

    &:hover {
      border: 1px solid #D73035;
      color: #D73035;
      background: #FDF5F6;

      span {
        color: #D73035;
      }
    }

    strong {
      font-weight: 600;
    }

    span {
      font-weight: 300;
      font-size: 0.75rem;
      color: #666;
      transition: 0.3s ease-in;
    }

    & + button {
      margin-top: 1.5rem;
    }
  }
`;