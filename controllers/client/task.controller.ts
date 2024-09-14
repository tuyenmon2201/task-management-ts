import Task from "../../models/task.model";
import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {

    const tasks = await Task.find({});

    res.json(tasks);
}

export const detail = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        const task = await Task.find({
            _id: id,
            deleted: false
        });
    
        res.json(task);
    } catch (error) {
        res.json({
            message: "Not found"
        });
    }
}