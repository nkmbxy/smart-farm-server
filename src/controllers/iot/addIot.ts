import { Request, Response } from "express";
import { IoTModel } from "../../models/model";

export const addIot = async (req: Request, res: Response) => {
    try {
        const { iot_id, status_iot } = req.body;
        const iot = new IoTModel({
            iot_id,
            status_iot
        });
        await iot.save();
        res.send({
            message: "Iot added successfully",
            iot,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).send({
            message: "Internal server error",
        });
    }
}
    