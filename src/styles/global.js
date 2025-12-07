import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
background: #fafafa;
font-family: "Poppins", sans-serif;
color: #111;
overflow-x: hidden;
}

a {
text-decoration: none;
color: inherit;
}

img {
max-width: 100%;
display: block;
}
`;
