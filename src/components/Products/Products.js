import { Component } from "react";
import Product from "../Product/Product";
import "./Products.css";

class Products extends Component {
  render() {
    return (
      <section className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    );
  }
}

export default Products;
