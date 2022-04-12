import React from "react";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Input = styled(TextField)`
  flex: 1;
  min-width: 40%;
  padding: 10px;
`;

const ButtonStyled = styled(Button)`
  border: none;
  width: 40%
  padding: 15px 20px;
  cursor: pointer;
  margin-bottom: 10px;
  margin: auto;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input size="small" placeholder="username" />
          <Input size="small" placeholder="password" />
          <ButtonStyled
            sx={{
              backgroundColor: "teal",
              color: "black",
              ":hover": {
                bgcolor: "#2196f3",
                color: "white",
              },
            }}
            variant="contained"
            size="small"
          >
            LOGIN
          </ButtonStyled>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
