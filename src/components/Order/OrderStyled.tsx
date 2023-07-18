import { styled } from "styled-components";

const OrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  .order {
    color: inherit;
    font-size: 1.4rem;
    font-weight: 500;
    background-color: #be9408;
    padding: 1.4rem 3.2rem;
    border-radius: 5px;
    transition: all 0.2s;
  }

  .order:hover {
    background-color: #a17d06;
  }
`;

export default OrderStyled;
