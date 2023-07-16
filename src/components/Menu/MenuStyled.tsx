import { styled } from "styled-components";

const MenuStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  .menu-title {
    display: inline-block;
    padding: 1rem 0;
    border-top: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    font-size: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
    margin-top: 1rem;
  }

  .menu-introduction {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.6;
    width: 80%;
  }

  .sushi {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.8rem;
  }
`;

export default MenuStyled;
