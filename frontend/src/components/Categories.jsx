import { Container } from "@mui/material";
import { categories } from "../sampleData";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container sx={{ display: "flex" }}>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
