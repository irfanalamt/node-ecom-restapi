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
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled(TextField)`
  flex: 1;
  min-width: 40%;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const ButtonStyled = styled(Button)`
  width: 40%;
  padding: 15px 20px;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input size="small" placeholder="name" />
          <Input size="small" placeholder="last name" />
          <Input size="small" placeholder="username" />
          <Input size="small" placeholder="email" />
          <Input size="small" placeholder="password" />
          <Input size="small" placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
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
            CREATE
          </ButtonStyled>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
