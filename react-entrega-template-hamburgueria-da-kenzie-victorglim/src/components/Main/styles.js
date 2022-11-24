import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 295px;

  @media (min-width: 425px) {
    width: 360px;
  }

  @media (min-width: 768px) {
    width: 760px;
    margin: 0 auto;
  }

  @media (min-width: 1080px) {
    width: 1100px;
    margin: 0 auto;
  }
`;

export const ContainerWallet = styled.div`
  margin: 0 auto;
  width: 360px;
  margin-left: 15px;
  border-radius: 0px 0px 5px 5px;
  @media (min-width: 425px) {
    width: 400px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 760px;
    margin: 0 auto;
    margin-top: -20px;
  }

  @media (min-width: 1080px) {
    width: 320px;
  }
`;

export const StyledMain = styled.main`
  margin-top: 1.25rem;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  margin-right: 40px;
  width: 335px;

  @media (min-width: 425px) {
    width: 436px;
  }

  @media (min-width: 768px) {
    overflow-x: none;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 1080px) {
    justify-content: flex-start;
    width: 800px;
    gap: 40px;
  }
`;

export const Flex = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 720px;
    margin: 0 auto;
  }

  @media (min-width: 1080px) {
    width: 1200px;
    margin-bottom: 50px;
  }
`;
