import { css } from '@emotion/core';
import Background from '@assets/images/gallery-3.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;

  p {
    color: rgba(255, 255, 255, 0.8) !important;
  }
`;

export const styFlex = css`
  display: flex;
  justify-content: center;
`;

export const styBoxWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;

  .img-section {
  }

  img {
    max-width: 500px;
    margin-right: 100px;
  }

  .text__section {
    width: 100%;
  }

  .text__info {
    font-weight: 500;
    font-size: 1.2em;
  }
  .tengah {
    margin: auto;
  }

  @media screen and (max-width: 480px) {
    img {
      max-width: 300px;
      margin-right: 8px;
    }

    .text__info {
      font-size: 1em;
    }
  }
`;
