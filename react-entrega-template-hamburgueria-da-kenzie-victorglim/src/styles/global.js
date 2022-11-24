import { createGlobalStyle } from "styled-components";
import "../index.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.9);
  }

  body::-webkit-scrollbar {
  width: 5px;              
}

body::-webkit-scrollbar-track {
  background: transparent;       
}

body::-webkit-scrollbar-thumb {
  background-color: #27ae60;   
  border-radius: 20px;       
  border: 3px solid transparent;  
}

.reversed {
    animation: translateNow 0.5s ease;
}

  @keyframes translateNow {
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(-70%);
   
  }
  }

`;

export default GlobalStyle;
