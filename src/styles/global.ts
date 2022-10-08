import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body{
        overflow-x: hidden;
    }

    html {
        width: 100vw;
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        -webkit-font-smoothing: antialiased;
    }   

    body, input, textarea, button {
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
        font-weight: 400;
    } 

    h1, h2, h3, h4, h5, h6{
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

` 