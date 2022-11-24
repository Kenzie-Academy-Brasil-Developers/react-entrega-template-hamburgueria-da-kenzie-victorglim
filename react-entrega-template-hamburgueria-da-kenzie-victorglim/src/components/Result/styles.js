import styled from "styled-components";

export const DivResult = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: space-between;
  animation: transition 1s ease;

  @media (min-width: 768px) {
    margin-left: 50px;
    width: 800px;
  }

  @media (min-width: 1080px) {
    margin-left: -50px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @keyframes transition {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const DivFlexResult = styled.div`
  display: flex;
  gap: 10px;
`;

export const TitleResult = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #333333;

  @media (min-width: 1080px) {
    font-size: 22px;
  }
`;

export const ItemResult = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  color: #828282;
  display: block;
  padding-top: 2px;

  @media (min-width: 1080px) {
    font-size: 20px;
  }
`;

export const CleanResult = styled.button`
  display: none;
  width: 137px;
  height: 40px;
  background: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;

  @media (min-width: 1080px) {
    display: block;
  }
`;
