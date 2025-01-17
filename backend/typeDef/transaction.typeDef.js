const transactionTypeDef = `#graphql
  type Transaction {
    _id: ID!
    userId: ID!
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    location: String
    date: String!
  }

  type Query {
    transactions: [Transaction!]
    transaction(transactionID:ID!): Transaction
    # TODO => ADD categoryStatistics query
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction!
    updateTransaction(input: UpdateTransactionInput!): Transaction!
    deleteTransaction(transactionID:ID!): Transaction!
  }

  input CreateTransactionInput {
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    location: String
    date: String!
  }

  input UpdateTransactionInput {
    transactionID: ID!
    description: String
    paymentType: String
    category: String
    amount: Float
    location: String
    date: String
  }

`

export default transactionTypeDef;