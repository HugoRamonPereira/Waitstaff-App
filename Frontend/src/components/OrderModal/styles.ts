import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  width: 480px;
  background: #fff;
  border-radius: 0.5rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      /* line-height: 0; - Can also be used to align the x of the button to the name in the strong tag */
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border: 2px solid transparent;
      border-radius: 50%;
      transition: 0.1s ease-in-out;

      &:hover {
        background: #FDF5F6;
        border: 2px solid #333;
        border-radius: 50%;

      }
    }
  }

  .status-container {
    padding-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
      gap: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      /*
        This plus ( + ) means that the styles applied below will only be applied
        to the element that has an element after it, so the first will not have
        the margin top of 1rem
      */
      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 0.4rem;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 0.75rem;
      }

      .product-details {
        margin-left: 0.25rem;

        strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        span {
          font-size: 0.875rem;
          color: #666;
          gap: 1rem;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  .primary {
    background: #333333;
    border-radius: 3rem;
    border: none;
    color: #FFFFFF;
    font-size: 1rem;
    letter-spacing: 1.1px;
    padding: 0.75rem 1.5rem;
    transition: 0.1s ease-in;

    &:hover {
      background: #1A1A1A;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .secondary {
    background: #FDF5F6;
    padding: 0.75rem 1.5rem;
    color: #D73035;
    letter-spacing: 1.1px;
    border-radius: 3rem;
    border: 1.6px solid #D73035;
    transition: 0.1s ease-in;

    &:hover {
      background: #D73035;
      color: #FDF5F6;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }


`;
