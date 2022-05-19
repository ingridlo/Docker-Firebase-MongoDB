import express from "express";
import { connectToDatabase } from "./services/database.service";
import { bookRouter } from "./routes/book.router";
import { decodeToken } from '../src/firebase/tokens';

const app = express();
const port = 4000; 

app.use(decodeToken)
connectToDatabase()
    .then(() => {        
        app.use("/books", bookRouter);
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });