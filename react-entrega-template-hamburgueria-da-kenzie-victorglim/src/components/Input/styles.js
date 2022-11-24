import styled from "styled-components";

export const DivStyledInput = styled.div`
  display: flex;
  justify-content: center;
  width: 340px;
  margin: 0 auto;

  @media (min-width: 425px) {
    width: 400px;
  }

  @media (min-width: 768px) {
    width: 300px;
    margin: 0px;
  }

  @media (min-width: 1080px) {
    width: 350px;
  }
`;

export const FormInput = styled.form`
  display: block;
`;

export const StyledInput = styled.input`
  background: #ffffff;
  border: 0.125rem solid #e0e0e0;
  border-radius: 0.5rem;
  display: flex;
  padding-left: 0.9375rem;
  justify-content: center;
  width: 18.75rem;
  outline: none;
  height: 2.875rem;
  color: #828282;

  @media (min-width: 425px) {
    width: 400px;
    height: 50px;
  }

  @media (min-width: 768px) {
    height: 45px;
    margin-top: 10px;
  }

  @media (min-width: 1080px) {
    width: 350px;
    height: 50px;
    margin-top: 7px;
    margin-left: 10px;
  }

  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #e0e0e0;
  }
`;

export const InputButton = styled.button`
  background: #27ae60;
  border: 0.125rem solid #27ae60;
  border-radius: 0.5rem;
  width: 5.9375rem;
  height: 2.125rem;
  font-size: 0.8125rem;
  color: #ffffff;
  position: absolute;
  margin-left: 12.1875rem;
  margin-top: 0.375rem;

  @media (min-width: 375px) {
    width: 100px;
    margin-left: 190px;
  }

  @media (min-width: 425px) {
    width: 120px;
    height: 40px;
    margin-top: 5px;
    margin-left: 270px;
  }

  @media (min-width: 768px) {
    margin-top: 15px;
    height: 36px;
    margin-left: 170px;
  }

  @media (min-width: 1080px) {
    margin-left: 220px;
  }
`;
