import React from 'react';
const Products = () =>{
  return (
    <div>
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Product name</td>
      <td>5</td>
      <td>The best product ever</td>
      <td>Category</td>
      <td>Category</td>
      <td>Price</td>
      <td>Link</td>
    </tr>
  </tbody>
</table>
      <h3 class="text-primary">Products image</h3>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Product ID</th>
      <th scope="col">Image URL</th>
      <th scope="col">Alt text</th>
      <th scope="col">Additional information</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Product name</td>
      <td>5</td>
      <td>The best product ever</td>
    </tr>
  </tbody>
</table>
      <h3 class="text-primary">Products additional info</h3>
      <table class="table table-striped">
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
</table>
    </div>
  );
}
export default Products;