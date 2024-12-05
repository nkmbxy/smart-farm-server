import { Request, Response } from "express";
import { LoggerModel } from "../../models/model";

export const getByLogger = async (req: Request, res: Response) => {
  try {
   const Logger = await LoggerModel.find()
   .populate("temperature_id")
   .populate("air_humidity_id")
   .populate("soil_moisture_id")
    .populate("nitrogen_id")
    .populate("phosphorus_id")
    .populate("potassium_id")
    if (!Logger) {
      res.status(404).json({ message: "Logger not found." });
      return;
    }
    res.status(200).json(Logger);
}catch (error: any) {
    console.log(error);
  }
};