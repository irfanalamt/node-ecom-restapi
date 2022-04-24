import React, { useState } from "react";
import styled from "@emotion/styled";
import { Alert, Button, TextField } from "@mui/material";

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
  width: 35%;
  height: 40px;
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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          if (data.accessToken) {
            setUserName("");
            setPassword("");
            setMessage("User login success.");
            setErrorMessage("");
          } else {
            setErrorMessage(data.message);
            setMessage("");
          }
          localStorage.setItem("webToken", data.accessToken);
          localStorage.setItem("userName", data.username);
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            size="small"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            size="small"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <ButtonStyled
            sx={{
              backgroundColor: "#3f51b5",
              color: "white",
              ":hover": {
                bgcolor: "#2196f3",
                color: "white",
              },
            }}
            variant="contained"
            size="small"
            type="submit"
          >
            LOGIN
          </ButtonStyled>
          <Link>DO NOT REMEMBER PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
          {errorMessage ? (
            <Alert variant="filled" severity="error">
              {errorMessage}
            </Alert>
          ) : (
            <></>
          )}
          {message ? (
            <Alert variant="filled" severity="success">
              {message}
            </Alert>
          ) : (
            <></>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
