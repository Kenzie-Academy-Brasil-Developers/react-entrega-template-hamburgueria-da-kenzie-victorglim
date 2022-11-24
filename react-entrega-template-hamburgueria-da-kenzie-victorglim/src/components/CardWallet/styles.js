import styled from "styled-components";

export const LiWallet = styled.li`
  width: 100%;
  display: flex;
  margin-top: 10px;
  position: relative;
  animation: smoothShow 900ms;
  animation: translateShow 0.7s ease;

  .reversed {
    animation: smoothNow 900ms;
    animation: translateNow 0.7s ease;
  }

  @keyframes smoothShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes translateShow {
    0% {
      opacity: 0;
      transform: translateX(-70%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const DivImgWallet = styled.div`
  width: 80px;
  height: 70px;
  text-align: center;
  background: #e0e0e0;
  border-radius: 5px;
  margin-left: 15px;
`;

export const ImgWallet = styled.img`
  width: 70px;
  height: 70px;
`;

export const DivMainWallet = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 10px;
`;

export const TitleMainWallet = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
  color: #333333;
`;

export const SpanMainWallet = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  display: block;
  color: #828282;
`;

export const DivRemoveWallet = styled.div`
  margin-left: 50px;
  margin-top: 13px;
`;

export const BtnRemoveWallet = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #bdbdbd;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 15px;
`;
