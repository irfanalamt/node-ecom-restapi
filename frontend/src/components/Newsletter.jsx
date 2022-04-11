import styled from "@emotion/styled";
import { SendRounded } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

const Input = styled(TextField)`
  color: white;
  width: 50%;
  flex: 8;
  padding-left: 20px;
`;

const Button1 = styled(Button)`
  background-color: teal;
  color: whitesmoke;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input size="small" variant="outlined" placeholder="Your email" />
        <Button1 variant="contained">
          <SendRounded />
        </Button1>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
