/** @jsxImportSource @emotion/react */
import React from "react";
import TextField from "@mui/material/TextField";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div
      css={{
        height: "60px",
      }}
    >
      <div
        css={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="left" css={{ flex: 1 }}>
          <Container
            css={{
              display: "flex",
              alignItems: "center",
              marginLeft: "25px",
              padding: "5px",
            }}
          >
            <TextField placeholder="Search" size="small" css={{ width: 150 }} />
            <Search sx={{ color: "gray", fontSize: 25 }} />
          </Container>
        </div>
        <div className="center" css={{ flex: 1, textAlign: "center" }}>
          <Typography
            css={{ fontWeight: "bold" }}
            variant="h4"
            component="div"
            gutterBottom
          >
            RFN. SHOP
          </Typography>
        </div>
        <div
          className="right"
          css={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div
            css={{ fontSize: "14px", cursor: "pointer", marginLeft: "25px" }}
            className="register"
          >
            REGISTER
          </div>
          <div
            css={{ fontSize: "14px", cursor: "pointer", marginLeft: "25px" }}
            className="signin"
          >
            SIGNIN
          </div>
          <div
            css={{
              fontSize: "14px",
              cursor: "pointer",
              marginLeft: "25px",
              marginRight: "20px",
            }}
            className="cart"
          >
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined p={100} />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
