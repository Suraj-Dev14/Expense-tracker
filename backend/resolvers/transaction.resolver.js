import Transaction from "../models/transaction.model.js";

const transactionResolver = {
  Mutation: {
    createTransaction: async(_,{input},context) => {
      try {
        const {description, paymentType, category, amount, location, date} = input;
        if(!description || !paymentType || !category || !amount || !date) {
          throw new Error("All fields are required.")
        }
        const newTransaction = new Transaction({
          description,
          paymentType,
          category,
          amount,
          location,
          date,
          userId: context.getUser()._id
        })
        await newTransaction.save();
        return newTransaction;
      } catch (error) {
        console.error("Error creating transaction:", error);
        throw new Error("Error creating transaction.");
      }
    },
    updateTransaction: async (_, {input}) => {
      try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(input.transactionId, input, {new:true});
        return updatedTransaction;
      } catch (error) {
        console.error("Error updating transaction:", error);
        throw new Error("Error updating transaction.");
      }
    },
    deleteTransaction: async (_, {transactionId}) => {
      try {
        const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
        return deletedTransaction;
      } catch (error) {
        console.error("Error deleting transaction:", error);
        throw new Error("Error deleting transaction.");
      }
    },
  },
  // TODO => ADD TRANSACTION/USER  RELATIONSHIP
  Query: {
    transactions: async (_, __, {context}) => {
      try {
        if(!context.getUser()) throw new Error("Unauthorized.");
        const userId = await context.getUser()._id;

        const transactions = await Transaction.find({user: userId});

        return transactions;
      } catch (error) {
        console.error("Error getting transaction:", error);
        throw new Error("Error getting transactions.");
      }
    },
    transaction: async (_, {transactionId},) => {
      try {
        const transaction = await Transaction.findById(transactionId);
        return transaction;
      } catch (error) {
        console.error("Error getting transaction:", error);
        throw new Error("Error getting transaction.");
      }
    },
    // TODO => ADD categoryStatistics query
  },
}

export default transactionResolver;