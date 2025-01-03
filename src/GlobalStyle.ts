import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    overflow: hidden; /* 모바일 스크롤 방지 */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  #root {
    width: 430px; /* 핸드폰 화면 너비 */
    height: 932px; /* 핸드폰 화면 높이 */
    background-color: #fff;
    border: 1px solid #ccc; /* 경계선 표시 */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
