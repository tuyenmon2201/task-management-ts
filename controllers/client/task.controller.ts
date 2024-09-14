import Task from "../../models/task.model";
import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
    const find = {
        deleted: false
    };

    // Filter by status

    const status = req.query.status;
    if(status){
        find["status"] = status;
    }
    // End filter by status

    // Sort

    const sort = {};

    const sortKey = `${req.query.sortKey}`;
    const sortValue = req.query.sortValue;

    if(sortKey && sortValue){
        sort[sortKey] = sortValue;
    }
    // End sort

    // Pagination

    let limitItems: number = 2;
    if(req.query.limitItems){
        limitItems = parseInt(`${req.query.limitItems}`);
    }

    let page: number = 1;
    if(req.query.page){
        page = parseInt(`${req.query.page}`);
    }

    const skip: number = (page - 1) * limitItems;

    // End pagination

    const tasks = await Task
        .find(find)
        .limit(limitItems)
        .skip(skip)
        .sort(sort)

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