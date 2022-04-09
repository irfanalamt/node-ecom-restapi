import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { Box, Container } from "@mui/material";

const containerStyle = () => {
  return {
    width: "100%",
    height: "100vh",
    backgroundColor: "#ffcc80",
    display: "flex",
  };
};
const boxStyle = () => {
  return {
    height: "45px",
    width: "45px",
    backgroundColor: "#e0f2f1",
    borderRadius: "50%",
    margin: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
};
const arrowStyle = () => {
  return {
    fontSize: "35",
    margin: "2px",
  };
};

const Slider = () => {
  return (
    <Container sx={containerStyle}>
      <Box sx={boxStyle}>
        <ArrowLeftOutlined sx={arrowStyle} />
      </Box>
      <Box sx={boxStyle}>
        <ArrowRightOutlined sx={arrowStyle} />
      </Box>
    </Container>
  );
};

export default Slider;
