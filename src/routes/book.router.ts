import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";

export const bookRouter = express.Router();

bookRouter.use(express.json());

bookRouter.get("/", async (req: Request, res: Response) => {
    try {
        const books = await collections.books.find({}).toArray();
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

bookRouter.post("/crear", async (req: Request, res: Response) => {
    try {
        let data = req.body;
        const books = await collections.books.insertOne(data);
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

bookRouter.put("/editar/:id", async (req: Request, res: Response) => {
    try {      
        let data = req.body
        const books = await collections.books.updateOne({_id: new ObjectId(req.params.id)},data);
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

bookRouter.delete("/eliminar/?id", async (req: Request, res: Response) => {
    try {
        const books =  collections.books.deleteOne({id: req.params});
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
});