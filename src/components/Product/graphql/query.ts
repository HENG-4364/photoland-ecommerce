import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query Products($categoryId: Int, $paginationInput: PaginationInput) {
    products(category_id: $categoryId, paginationInput: $paginationInput) {
      data {
        id
        product_name
        summary
        description
        image
        price
        category {
          id
          category_name
        }
      }
      pagination {
        total
        size
        current
      }
    }
  }
`;
