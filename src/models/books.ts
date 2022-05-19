import { ObjectId } from "mongodb";

export default interface Books {
    name: string;
    author: string;
    pages_number: string;
    language: string;
    published: string;
    id?: ObjectId;
}

