import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <LoginWrapper>
          <IntroContainer>
            <h1>New Here?</h1>
          </IntroContainer>
          <LoginContainer>Test</LoginContainer>
        </LoginWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: "#203656",
  width: "100%",
  height: "calc(100vh - 73px)",
  padding: "30px 0",
});

const Container = styled.div({
  maxWidth: "1400px",
  margin: "auto",
  border: "solid 2px #fff",
  borderRadius: "20px",
});

const LoginWrapper = styled.div({
  display: "flex",
  width: "100%",
  minHeight: "200px",
});

const IntroContainer = styled.div({
  flex: "2",
  backgroundColor: "#203656",
  textAlign: "center",
  color: "#fff",
  borderRadius: "20px 0 0 20px",
});

const LoginContainer = styled.div({
  flex: "3",
  backgroundColor: "#fff",
  borderRadius: "0 17px 17px 0",
});

export default Login;
