import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap');


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #e5e6f0;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
    }


`

export default GlobalStyle