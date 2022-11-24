import styled from "styled-components";

export const List = styled.li`
  min-width: 240px;
  height: 320px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  animation: smoothShow 900ms;

  animation: translateShow 1.4s ease;

  @media (min-width: 768px) {
    width: 30px;
  }

  @media (min-width: 1080px) {
    height: 300px;
    width: 40px;
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

export const DivImage = styled.div`
  background: #f5f5f5;
`;

export const ImgCard = styled.img`
  width: 70%;
  height: 150px;
  margin: 0 auto;
  display: flex;
  border-radius: 5px 5px 0px 0px;

  @media (min-width: 1080px) {
    height: 150px;
  }
`;

export const TitleCard = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-left: 20px;
  margin-top: 20px;
  color: #333333;

  @media (min-width: 1080px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const SmallCard = styled.small`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  margin-top: 10px;
  font-size: 12px;
  display: block;
  margin-left: 20px;
  color: #828282;
`;

export const SpanCard = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-left: 20px;
  display: block;
  color: #27ae60;
  margin-top: 10px;
`;

export const ButtonCard = styled.button`
  width: 106px;
  height: 40px;
  background: #27ae60;
  margin-left: 20px;
  border: 2px solid #27ae60;
  border-radius: 8px;
  margin-top: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;

  @media (min-width: 1080px) {
    height: 34px;
    width: 120px;
  }
`;
