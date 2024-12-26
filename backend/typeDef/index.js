import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./transaction.typeDef.js";


const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;

  // Why Merge Type Defination?

  // Modularity : Merging type definitions allows you to keep related schema components in seperate files, promoting modularity and organization.

  // Easier Collaboration : If multiple developer are working on different parts of the schema, potentially reducing duplication.

  // Clear Separation of Concerns : Each file can focus on a specific domain or type of data, making it easier to understand and maintain.