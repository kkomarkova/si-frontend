import {gql} from'@apollo/client'

export const GET_PRODUCTS = gql`
query{
    GetAllProducts{
      id,
      product_name,
      overall_rating,
      product_description,
      main_category,
      sub_category,
      price,
      link
      
    }
  }

`