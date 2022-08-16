const { gql } = require('apollo-server-express');

const typeDefs = gql`

  #creo mi propio type
  type Product {
    id: ID
    prodName: String
    prodPrice: Float
    prodStock: Int
    prodImage: String
  }
  type Query {
    getAllProducts: [Product]
    getProduct(id: ID): Product
  }
  input ProductInput {
    prodName: String 
    prodPrice: Float 
    prodStock: Int 
    prodImage: String
  }

  type Mutation {
    createProduct(product: ProductInput!): Product
    deleteProduct(id: ID!): String
    updateProduct(id: ID!, product: ProductInput): Product
  }
`

module.exports = { typeDefs };