import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&display=swap');

* {

box-sizing: border-box;
}


body {
background-color: #f7fafc;
margin: 0;
font-size: 1rem;
font-family: 'Red Hat Display', sans-serif;
color: #191919;
/* font-family: 'Poppins', sans-serif; */


line-height: 1.6;
}

img {
max-width: 100%;
display: block;
}

h1 {
    font-weight: 700px;
}
`;

export default GlobalStyle;



