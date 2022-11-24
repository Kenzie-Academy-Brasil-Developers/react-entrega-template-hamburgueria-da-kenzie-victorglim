import styled from "styled-components";

export const BoxWallet = styled.div`
  height: 158px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 100px;
  width: 320px;

  @media (min-width: 425px) {
    width: 400px;
    margin-left: 20px;
  }
  @media (min-width: 1080px) {
    width: 340px;
  }
`;

export const HeaderWallet = styled.div`
  width: 100%;
  height: 65px;
  background: #27ae60;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainWallet = styled.div`
  width: 100%;
  min-height: 158px;
  height: 100%;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
`;

export const DivBottomWallet = styled.div`
  border-top: 2px solid #e0e0e0;
  height: 120px;
  margin-top: 15px;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
`;

export const ContainerBottomWallet = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
`;
