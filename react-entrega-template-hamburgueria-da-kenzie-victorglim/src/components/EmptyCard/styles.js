import styled from "styled-components";

export const DivEmpty = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  gap: 30px;
  margin-bottom: 40px;

  @media (min-width: 1080px) {
    margin-left: 80px;
    margin-top: 90px;
    flex-direction: row;
  }
`;

export const ImageEmpty = styled.img`
  width: 100px;

  height: 100px;
`;

export const TitleEmpty = styled.h2`
  color: #27ae60;
  width: 300px;

  @media (min-width: 1080px) {
    width: 500px;
  }
`;
