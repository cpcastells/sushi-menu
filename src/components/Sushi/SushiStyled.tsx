import { styled } from "styled-components";

const SushiStyled = styled.article`
  display: flex;
  gap: 3.2rem;

  .uramaki-picture {
    width: 12rem;
    align-self: flex-start;
  }

  .uramaki-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.4rem 0;
  }

  .uramaki-title {
    font-size: 2rem;
    font-weight: 400;
  }

  .uramaki-ingredients {
    font-size: 1.4rem;
    font-weight: 300;
    font-style: italic;
    margin-bottom: auto;
  }

  .uramaki-price {
    display: block;
    font-size: 1.6rem;
  }

  .uramaki-picture.sold-out {
    filter: grayscale(100%);
    opacity: 0.8;
  }
`;

export default SushiStyled;
