/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import hm1 from "../images/hm1.jpg";
import styled from "@emotion/styled";
import { sliderItems } from "../sampleData";

const StyledSlider = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const StyledWrapper = styled(Box)`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const containerStyle = () => {
  return {
    width: "100%",
    height: "100vh",
    backgroundColor: "#ffcc80",
    display: "flex",
    position: "relative",
    overflow: "hidden",
  };
};
const boxStyle = () => {
  return {
    height: "45px",
    width: "45px",
    backgroundColor: "#e0f2f1",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    cursor: "pointer",
    opacity: 0.8,
    zIndex: 2,
  };
};
const arrowStyle = () => {
  return {
    fontSize: "35",
    margin: "2px",
  };
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Box sx={containerStyle}>
      <Box
        direction="left"
        style={{ left: "10px" }}
        sx={boxStyle}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined sx={arrowStyle} />
      </Box>
      <StyledWrapper
        sx={{ height: "100%", display: "flex" }}
        className="wrapper"
        slideIndex={slideIndex}
      >
        {sliderItems.map((item) => (
          <StyledSlider bg={item.bg} key={item.id} classname="slider">
            <Box
              sx={{
                height: "100%",
                flex: 1,
              }}
              className="imageContainer"
            >
              <img
                src={hm1}
                alt="mypic"
                css={{ height: "80%", margin: "5px 5px" }}
              />
            </Box>
            <Box sx={{ flex: 1, padding: "70px " }} className="infoContainer">
              <Typography
                sx={{ fontSize: "70px" }}
                variant="h1"
                component="div"
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  margin: "10px 0px",
                  fontSize: "20px",
                  fontWeight: 500,
                  letterSpacing: "3px",
                }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                {item.desc}
              </Typography>
              <Button
                sx={{
                  padding: "10px",
                  fontsize: "20px",
                  cursor: "pointer",
                  opacity: 0.9,
                }}
                variant="contained"
              >
                SHOP NOW
              </Button>
            </Box>
          </StyledSlider>
        ))}
      </StyledWrapper>

      <Box
        direction="right"
        style={{ right: "10px" }}
        sx={boxStyle}
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined sx={arrowStyle} />
      </Box>
    </Box>
  );
};

export default Slider;
