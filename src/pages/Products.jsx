/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_PRODUCTS } from "../GraphQL/Queries";
import WishButton from "../components/WishButton";
import ShowPagination from "../components/Pagination";
function Products() {
  const { error, loading, data } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);
  const [productperpage, setProductperpage] = useState(10);
  const [currentpage, setCurrentpage] = useState(1);
  const [productImages, setProductImages] = useState([]);
  const[currentProducts,setCurrentProducts] = useState([]);
  //Constatly log data to console
  useEffect(() => {
    if (data) {
      //console.log(data.GetAllProducts);
      const indexOfLastPage = currentpage * 10;
      const indexOfFirstPage = indexOfLastPage - productperpage;
      const currentProducts = data.GetAllProducts.slice(
        indexOfFirstPage,
        indexOfLastPage
      );
      setCurrentProducts(currentProducts)
      setProducts(data.GetAllProducts);
      console.log(data.GetAllProducts[0].product_images[0]);
      setProductImages(data.GetAllProducts);
    }
  }, [data]); 

  console.log(currentProducts)
  return (
    <>
      <h3 class="text-primary">Products</h3>
      <ShowPagination postsPerPage = {productperpage} setProducts={setCurrentProducts}data={products} setCurrentpage = {setCurrentpage} currentPage ={currentpage} />

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Image URL</th>
            <th scope="col">Product name</th>
            <th scope="col">Main category</th>
            <th scope="col">Sub category</th>
            <th scope="col">Product description</th>
            <th scope="col">Overall rating</th>
            <th scope="col">Price</th>
            <th scope="col">Link</th>
            <th scope="col">Choices</th>
            <th scope="col">Additional information</th>
            <th scope="col">Options</th>
          </tr>
        </thead>

        <tbody>
          {currentProducts &&
            currentProducts.map((product, index) => {
              return (
                <tr>
                  <td>{10 * (currentpage - 1) + index + 1}</td>
                  <td>
                    <img
                      src={product.product_images[0].image_url}
                      alt={product.product_images[0].alt_text}
                      width="100"
                    />
                  </td>
                  <td>{product.product_name}</td>
                  <td>{product.main_category}</td>
                  <td>{product.sub_category}</td>
                  <td>{product.product_description.substring(0, 100)}...</td>
                  <td>{product.overall_rating}</td>
                  <td>{product.price}£</td>
                  <td>{product.link}</td>
                  <td>{product.product_additional_info[0].choices}</td>
                  <td>{product.product_additional_info[0].additional_info}</td>
                  <td>
                    <WishButton product_id={product.id} />
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
