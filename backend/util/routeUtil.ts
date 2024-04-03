import { Request, Response } from 'express';
import * as path from "path";

const buildPath: string = path.join(__dirname, "../frontend/build");

export function handleGetRequest(_req: Request, res: Response) {
    res.sendFile("index.html", {
        root: buildPath
    });
}
