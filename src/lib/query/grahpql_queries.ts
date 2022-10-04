import {gql} from "@apollo/client";

export const GET_PRODUCTS = gql`
    query Products {
        products {
            _id
            brand
            category
            colours
            createdAt
            description
            images
            name
            numInStock
            numReviews
            price
            rating
            sizes
            updatedAt
        }
    }
`;