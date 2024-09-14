import User from "../../models/user.model";
import md5 from 'md5';
import * as generateHelper from "../../helpers/generate.helper";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    try {

        const existEmail = await User.findOne({
            email: req.body.email,
            deleted: false
        });

        if(existEmail){
            res.json({
                code: 400,
                message: "Email đã tồn tại!"
            });

            return;
        }

        const token = generateHelper.generateRandomString(30);
        
        const dataUser = {
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            token: md5(token)
        };

        const user = new User(dataUser);
        await user.save(); 

        res.json({
            code: 200,
            message: "Đăng ký thành công!",
            token: token
        });

    } catch (error) {
        res.json({
            message: "Not found"
        });
    }
}