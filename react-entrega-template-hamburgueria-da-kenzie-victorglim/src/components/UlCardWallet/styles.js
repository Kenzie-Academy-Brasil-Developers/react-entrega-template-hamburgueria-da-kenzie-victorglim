import styled from "styled-components";

export const UlWallet = styled.ul`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  max-height: 240px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #27ae60;
    border-radius: 20px;
    border: 3px solid transparent;
  }
`;
