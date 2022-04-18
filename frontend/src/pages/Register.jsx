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
  text-align: center;
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: userName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (res.status === 201) {
        setFirstName("");
        setLastName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
        setErrorMessage("");
      } else {
        setErrorMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            size="small"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            size="small"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            size="small"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            size="small"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            size="small"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            size="small"
            placeholder="confirm password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
            type="submit"
          >
            CREATE
          </ButtonStyled>
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

export default Register;
