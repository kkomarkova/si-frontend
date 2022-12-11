import React, {useEffect, useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import {GET_PRODUCTS} from '../GraphQL/Queries'

function Products () {
  const {error, loading, data} = useQuery(GET_PRODUCTS)
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([]);
  

  //Constatly log data to console
  useEffect(() => {
    if (data) {
      //console.log(data.GetAllProducts);
      setProducts(data.GetAllProducts);
      console.log(data.GetAllProducts[0].product_images[0])
      setProductImages(data.GetAllProducts);
    }
  }, [data]);

  
  return (
    <>
    <div>
  {products && products.map((product) => { return (
    
       <><h3 class="text-primary">Products</h3><table class="table table-striped">
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
          </tr>
        </thead>
        
        <tbody>
        {products && products.map((product) => { return (
          <tr>
            <th scope="row">{product.id}</th>
            <td>{product.product_name}</td>
            <td>{product.overall_rating}</td>
            <td>{product.product_description}</td>
            <td>{product.main_category}</td>
            <td>{product.sub_category}</td>
            <td>{product.price}</td>
            <td>{product.link}</td>
          </tr>

)})}
         
        </tbody>
      
      </table><h3 class="text-primary">Products image</h3><table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Image URL</th>
              <th scope="col">Alt text</th>
              <th scope="col">Additional information</th>
            </tr>
          </thead>
          {productImages && productImages.map((product_images) => { return (
          <tbody>
            <tr>
              <th scope="row">{product_images.product_id}</th>
              <td>{product_images.image_url}</td>
              <td>{}</td>
              <td>The best product ever</td>
            </tr>
          </tbody>
          )})}
        
        </table><h3 class="text-primary">Products additional info</h3><table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Choices</th>
              <th scope="col">Additional information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Product name</td>
              <td>5</td>
            </tr>
          </tbody>
        </table></>
  )})}
  </div>
    </>

  );
}
export default Products;