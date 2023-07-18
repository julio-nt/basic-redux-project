import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {
  return (
    <Styles.Container>
      {products.map((product, i) => (
        <ProductItem product={product} key={i} />
      ))}
    </Styles.Container>
  );
};

export default Products;
