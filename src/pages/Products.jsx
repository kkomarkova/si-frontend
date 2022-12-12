import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_PRODUCTS } from "../GraphQL/Queries";

function Products() {
  const { error, loading, data } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([]);

  //Constatly log data to console
  useEffect(() => {
    if (data) {
      //console.log(data.GetAllProducts);
      setProducts(data.GetAllProducts);
      console.log(data.GetAllProducts[0].product_images[0]);
      setProductImages(data.GetAllProducts);
    }
  }, [data]);

  return (
              <>
                <h3 class="text-primary">Products</h3>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Product name</th>
                      <th scope="col">Overall rating</th>
                      <th scope="col">Product description</th>
                      <th scope="col">Main category</th>
                      <th scope="col">Sub category</th>
                      <th scope="col">Price</th>
                      <th scope="col">Link</th>
                      <th scope="col">Image URL</th>
                      <th scope="col">Alt text</th>
                      <th scope="col">Image Additional information</th>
                      <th scope="col">Choices</th>
                      <th scope="col">Additional information</th>
                    </tr>
                  </thead>

                  <tbody>
                    {products &&
                      products.map((product) => {
                        return (
                          <tr>
                            <th scope="row">{product.id}</th>
                            <td>{product.product_name}</td>
                            <td>{product.overall_rating}</td>
                            <td>{product.product_description}</td>
                            <td>{product.main_category}</td>
                            <td>{product.sub_category}</td>
                            <td>{product.price}</td>
                            <td>{product.link}</td>
                            <td>{product.product_images[0].image_url}</td>
                            <td>{product.product_images[0].alt_text}</td>
                            <td>{product.product_images[0].additional_info}</td>
                            <td>
                              {product.product_additional_info[0].choices}
                            </td>
                            <td>
                              {
                                product.product_additional_info[0]
                                  .additional_info
                              }
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
          </>

  );
}
  export default Products;
