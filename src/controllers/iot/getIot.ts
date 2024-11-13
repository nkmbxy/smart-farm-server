import { Request,Response } from "express";
import { IoTModel } from "../../models/model";

export const getIot = async (req: Request, res: Response) => {
    try {
        const iot = await IoTModel.find();
        res.send({
            message: "Iot data",
            iot,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).send({
            message: "Internal server error",
        });
    }
}