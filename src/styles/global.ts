/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }
  body,input,textarea,button{
    font-weight: 400;
    font-family: 'Inter', sans-serif;
  }
`;