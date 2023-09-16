// ImageListStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .scroll-container {
    display: flex;
    overflow-x: hidden;
    width: 800px;
  }
  ul {
    max-height: 150px;
    overflow-y: auto;
    white-space: nowrap;
    padding: 0;
    background-color: #ddd;
    margin: 0;
    display: flex;
    justify-content: flex-start;
  }
  li {
    width: 150px;
    height: 150px;
    padding: 15px;
    transition: transform 0.3s ease;
    display: inline-block;
  }
  li img {
    --size: 50px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
  }
  li div {
    padding: 15px;
    background-color: #fff;
    height: calc(100% - 30px);
  }
`;

export default GlobalStyle;
