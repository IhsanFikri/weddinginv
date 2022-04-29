import { css } from '@emotion/core';

export const styWrapper = css`
a:link {
  color: black;
}

/* visited link */
a:visited {
  color: black;
}

/* mouse over link */
a:hover {
  color: #8E806A;
}

/* selected link */
a:active {
  color: blue;
}
  @media screen and (max-width: 400px) {
    .sub-title {
      font-size: 16px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }
`;
