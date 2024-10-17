import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   .site__grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
      image-rendering: smooth;
  } 
 
  .half__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr); 
    gap: 30px;
  }

    body::-webkit-scrollbar {
    display: none;
  }

  body {
    -ms-overflow-style: none;  
    scrollbar-width: none;  
  }

  html, button {
    font-family: EverettRegular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    text-transform: none;
  }

  h1 {
    font-family: affairsRegular, Georgia, 'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
  }

 .nav {
    font-family: affairsRegular, Georgia, 'Times New Roman', Times, serif;
    font-style: normal;
  }

  h2 {
    font-family: HALMatex, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }

  h3 {
    font-family: HALMatex, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
  }

  h4 {
    font-family: affairsRegular, Georgia, 'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px; 
    line-height: 37px;
  }

  h5, .home__text {
    font-family: affairsRegular, Georgia, 'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 71px;
    line-height: 85px;
  }

   p, li, a {
    font-family: HALMatex, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  button {
    text-transform: uppercase;
  }


  a {
    color: var(--black);
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  :root {
    --black: #000000;
    --cream: #F7F0E7;
    --skin: #F7D7C0;
    --blue: #EAF0F4;
    --red: #D14029; 
    --white: #D14029;
    --green: #647A6C;
    --brown: #AA7B41; 
    --burgundy: #7E1529; 

  }

  strong {
    font-weight: normal;
  }

   /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }  */

  img {
    max-width: 100%;
  }  

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    margin: 0;
    padding: 0;
  } 

  button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
  }

  .style__pill {
    width: fit-content;
    text-align: center;
    border: 1.5px solid black;
    border-radius: 30px;
    padding-bottom: 0!important;
    padding: 1px 7px;
  }

  .dashed {
    border-style: dashed;
  }

  .tl-edges {
    width: 100% !important;
    overflow: hidden !important;
    overflow-y: hidden !important;
  }

  /* Mobile Global Styles */

  @media only screen and (max-width: 1100px) {
    .site__grid {
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;
    }


    h1 {
    font-size: 27px;
    line-height: 32px;
  }

    h2 {
      font-size: 15px;
      line-height: 18px;
    } 

    h5, .home__text {
    font-size: 30px;
    line-height: 30px;
  }

  h3 {
    font-size: 13px;
    line-height: 16px;
  }

  h4 {
    font-size: 25px;
    line-height: 30px;
  }

  p, li, a {
    font-size: 15px;
    line-height: 19px;
  }


  }


`;

export default GlobalStyles;
