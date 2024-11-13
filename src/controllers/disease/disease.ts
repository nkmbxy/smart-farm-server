import { Request, Response } from "express";
import { DiseaseModel } from "../../models/model";

export const addDisease = async (req: Request, res: Response) => {
  try {
    const { DiseaseName, Recommend } = req.body;
    const Disease = new DiseaseModel({ DiseaseName: DiseaseName, Recommend: Recommend });
    await Disease.save();
    res.send({
      message: "Disease added successfully",
    });
}catch (error: any) {
    console.log(error);
  }
};