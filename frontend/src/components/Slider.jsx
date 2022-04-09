/** @jsxImportSource @emotion/react */
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import hm1 from "../images/hm1.jpg";

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
    <Box sx={containerStyle}>
      <Box direction="left" style={{ left: "10px" }} sx={boxStyle}>
        <ArrowLeftOutlined sx={arrowStyle} />
      </Box>
      <Box sx={{ height: "100%", display: "flex" }} className="wrapper">
        <Box
          classname="slider"
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
          }}
        >
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
              Summer sale
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
              Flat 30% off on new arrivals!
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
        </Box>
      </Box>

      <Box direction="right" style={{ right: "10px" }} sx={boxStyle}>
        <ArrowRightOutlined sx={arrowStyle} />
      </Box>
    </Box>
  );
};

export default Slider;
