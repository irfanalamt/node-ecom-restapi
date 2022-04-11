import styled from "@emotion/styled";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;
const Circle = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 80%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  z-index: 2;
`;

const ProductItem = ({ item }) => {
  const onMouseOverIcon = (e) => {
    e.target.style.transform = "scale(1.1)";
  };
  const onMouseLeaveIcon = (e) => {
    e.target.style.transform = "scale(0.9)";
  };
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info
        onMouseEnter={(e) => (e.target.style.opacity = 0.9)}
        onMouseLeave={(e) => (e.target.style.opacity = 0)}
      >
        <Icon>
          <ShoppingCartOutlined
            onMouseEnter={onMouseOverIcon}
            onMouseLeave={onMouseLeaveIcon}
          />
        </Icon>
        <Icon>
          <SearchOutlined
            onMouseEnter={onMouseOverIcon}
            onMouseLeave={onMouseLeaveIcon}
          />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined
            onMouseOver={onMouseOverIcon}
            onMouseLeave={onMouseLeaveIcon}
          />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
