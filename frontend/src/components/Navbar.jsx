/** @jsxImportSource @emotion/react */
import TextField from "@mui/material/TextField";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Container, Typography } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container
      sx={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fce4ec",
      }}
    >
      <div className="left" css={{ flex: 1 }}>
        <Container
          css={{
            display: "flex",
            alignItems: "center",
            margin: 5,
            padding: "5px",
          }}
        >
          <TextField
            placeholder="Search"
            size="small"
            sx={{ width: 150 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </div>
      <div className="center" css={{ flex: 1, textAlign: "center" }}>
        <Typography
          css={{ fontWeight: "bold", marginTop: 10 }}
          variant="h4"
          component="div"
          gutterBottom
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            RFN. SHOP
          </Link>
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
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/register"
          >
            REGISTER
          </Link>
        </div>
        <div
          css={{
            fontSize: "14px",
            cursor: "pointer",
            marginLeft: "25px",
          }}
          className="signin"
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            SIGNIN
          </Link>
        </div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
          <div
            css={{
              fontSize: "14px",
              cursor: "pointer",
              marginLeft: "25px",
              marginRight: "20px",
            }}
            className="cart"
          >
            <Badge badgeContent={2} sx={{ color: "#6573c3" }}>
              <ShoppingCartOutlined p={100} />
            </Badge>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
