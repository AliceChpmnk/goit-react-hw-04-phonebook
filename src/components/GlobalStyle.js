import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #DCDCDC;
        padding: 40px;
    }

    p {
    margin: 0;
    }
    li {
        list-style: none;
    }
    ul {
        padding: 0;
    }

    h1 {
    margin-top: 0;
    font-weight: 900;
    font-size: 1.8rem;
    color: #1DA1F2;
    letter-spacing: 1px;
    }

    h3 {
     margin-top: 0;
    }
`