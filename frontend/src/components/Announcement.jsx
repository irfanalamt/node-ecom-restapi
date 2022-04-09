/** @jsxImportSource @emotion/react */

import { Container } from "@mui/material";
import { Box } from "@mui/system";

const Announcement = () => {
  return (
    <Container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "25px",
        display: "flex",
        backgroundColor: "#009688",
        color: "white",
        fontSize: "15px",
        fontWeight: "500",
      }}
    >
      Mega sale! Free shipping on orders over 30$
    </Container>
  );
};

export default Announcement;
