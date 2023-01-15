import { css } from 'styled-components';

export const MODIFIERS = {
  small: () => css`
    padding: 8px;
    height: 30px;
    font-size: 1rem;
  `,

  large: () => css`
    padding: 15px 32px;
    height: 50px;
    font-size: 1.5rem;
  `,

  padding: () => css`
    padding: 15px;
  `,

  paddinghorizontal: () => css`
    padding-left: 15px;
    padding-right: 15px;
  `,

  paddingvertical: () => css`
    padding-top: 15px;
    padding-bottom: 15px;
  `,

  nopadding: () => css`
    padding: 0px;
  `,

  nopaddinghorizontal: () => css`
    padding-left: 0;
    padding-right: 0;
  `,

  nopaddingvertical: () => css`
    padding-top: 0;
    padding-bottom: 0;
  `,

  nodimensions: () => css`
    width: auto;
    height: auto;
  `,
};
