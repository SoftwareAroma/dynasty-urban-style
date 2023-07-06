import {gql} from "@apollo/client";

export const CREATE_USER = gql``;

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

export const CREATE_PRODUCT = gql`
    mutation CreateProduct($createProductInput: CreateProductDto!, $images: [Upload!]!) {
        createProduct(createProductInput: $createProductInput, images: $images) {
            _id
            name
            category
            price
            brand
            description
            numInStock
            numReviews
            rating
            sizes
            colours
            images
        }
    }
`;