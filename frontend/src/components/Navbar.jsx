/** @jsxImportSource @emotion/react */
import TextField from "@mui/material/TextField";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Container, Typography } from "@mui/material";
import { InputAdornment } from "@mui/material";

const Navbar = () => {
  return (
    <Container
      sx={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
    </Container>
  );
};

export default Navbar;
