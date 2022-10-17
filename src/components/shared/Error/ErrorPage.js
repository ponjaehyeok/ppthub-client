import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import errorImageSrc from "../../../images/error.png";

function ErrorPage({ errorMessage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <ErrorPageContainer>
      <ErrorPageImage src={errorImageSrc} alt="에러가 발생하였습니다." />
      <BoldText>현재 {errorMessage} 문제로 인하여</BoldText>
      <p>일시적으로 접속이 되지 않습니다.</p>
      <p>잠시후 다시 이용 부탁드리겠습니다.</p>
      <MainButton type="button" onClick={() => handleClick()}>
        Home
      </MainButton>
    </ErrorPageContainer>
  );
}

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

const ErrorPageImage = styled.img`
  width: 50%;
  height: 50%;
  margin: auto;
`;

const BoldText = styled.b`
  margin-bottom: 1.2rem;
`;

const MainButton = styled.button`
  width: 10rem;
  height: 3rem;
  margin: auto;
  border-radius: 0.7rem;
  font-size: 1.5rem;
`;

export default ErrorPage;
