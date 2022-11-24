import styled from "styled-components";

export const StyleHeader = styled.header`
  background-color: #f5f5f5;
  height: 120px;
  min-width: 340px;
  width: 100%;

  @media (min-width: 425px) {
    min-width: 470px;
    width: 100%;
  }

  @media (min-width: 768px) {
    height: 90px;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1080px) {
    padding-left: 80px;
    min-width: 1300px;
  }
`;

export const ContainerHeader = styled.div`
  @media (min-width: 768px) {
    width: 730px;
    margin: 0 auto;
  }

  @media (min-width: 1080px) {
    width: 1150px;
  }
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.25rem;
  margin-bottom: 0.9375rem;

  @media (min-width: 1080px) {
    img {
      width: 170px;
      margin-left: -65px;
    }
  }
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    justify-content: space-between;
    margin: 0px;
  }
`;
