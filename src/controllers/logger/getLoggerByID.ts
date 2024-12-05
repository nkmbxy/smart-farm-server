import { Request, Response } from "express";
import { LoggerModel } from "../../models/model";

export const getLoggerByID = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const Logger = await LoggerModel.findById(id)
    .populate("temperature_id")
    .populate("air_humidity_id")
    .populate("soil_moisture_id")
    .populate("nitrogen_id")
    .populate("phosphorus_id")
    .populate("potassium_id")
    .populate("diseasePredict_id")
    if (!Logger) {
      res.status(404).json({ message: "Logger not found." });
      return;
    }
    res.status(200).json(Logger);
}catch (error: any) {
    console.log(error);
  }
};