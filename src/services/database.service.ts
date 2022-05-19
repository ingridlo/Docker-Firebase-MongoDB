import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import books from "../models/books";

export const collections: { books?: mongoDB.Collection<books> } = {};
export async function connectToDatabase() {    
    dotenv.config();
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);    
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const booksCollection = db.collection<books>(process.env.BOOKS_COLLECTION_NAME);
    collections.books = booksCollection;
     console.log(
         `Successfully connected to database: ${db.databaseName} and collection: ${booksCollection.collectionName}`,
     );
}