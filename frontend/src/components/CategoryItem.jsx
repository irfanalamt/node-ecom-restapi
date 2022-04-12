/** @jsxImportSource @emotion/react */
import { Box, Button, Container, Typography } from "@mui/material";

const CategoryItem = ({ item }) => {
  return (
    <Container
      sx={{
        flex: 1,
        padding: "2px",
        height: "70vh",
        position: "relative",
        backgroundColor: "#f5fafd",
      }}
    >
      <img
        css={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          margin: "2px",
        }}
        src={item.img}
        alt=""
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="info"
      >
        <Typography
          sx={{ color: "white", margin: "15px" }}
          variant="h5"
          component="div"
          gutterBottom
          className="title"
        >
          {item.title}
        </Typography>
        <Button
          sx={{
            backgroundColor: "white",
            color: "gray",
            ":hover": {
              bgcolor: "#80cbc4",
              color: "white",
            },
          }}
          variant="contained"
        >
          SHOP NOW
        </Button>
      </Box>
    </Container>
  );
};

export default CategoryItem;
