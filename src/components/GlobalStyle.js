import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    font-size:62.5%;
    
}
body{
    background:var(--secondary) ;
    color: white;
    overflow-x: hidden;
    /* font-size:1.6rem; */
}
p{
    color:var(--text-primary);
    font-size:1.6rem;
}
h1,h2,h3,h4,h5,h6{
    color: white;
}
h1{
    font-size:4rem;
    
}
h2{
    font-size:3rem;
}
h3{
    font-size: 2.5rem;
}
h4{
    font-size: 2rem;
}
h5{
    font-size:1.8rem;
}
h6{
    font-size:1.6rem;
}
ul{
    margin-bottom: 0rem;
}
`;

export default GlobalStyle;
