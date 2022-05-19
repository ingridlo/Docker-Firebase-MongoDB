import { Request, Response, NextFunction } from "express";
import admin from "../firebase/firebase-config";

export const decodeToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    try {
        if (token === undefined) {
            return res.status(401).json({ message: "Acceso no autorizado" });
        } else {
            const decodeValue = await admin.auth().verifyIdToken(token!);
            console.log(decodeValue);
            if (decodeValue != null || decodeValue != undefined) {
                return next();
            }
            return res.json({ message: "Acceso no autorizado" });
        }
    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal Server Error" }).status(500);
    }
}