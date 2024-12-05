import { Request, Response } from "express";
import {
  LoggerModel,
  TemperatureModel,
  AirHumidityModel,
  SoilMoistureModel,
  NitrogenModel,
  PhosphorusModel,
  PotassiumModel,
  DiseasePredictModel,
  DiseaseModel,
} from "../../models/model";
import { uploadImage } from "../../utils/uploadImage";
import axios from "axios";
import {predictURL} from '../../config/config'

export const addLogger = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    // if (!file) {
    //   return res.status(400).send("Please upload a file");
    // }
    const imageUrl = await uploadImage(req.file);

    const predictImage = await axios
      .post(predictURL, { imageArr: [imageUrl] })
      .then((response) => {
        return response.data;
      }).catch((error) => {console.log(error)});
    
      if (!predictImage) {
        res.status(400).json({ message: "Prediction service returned no data." });
        return;
      }

    const predictedDiseaseName = predictImage.prediction;
    if (!predictedDiseaseName) {
      res.status(400).json({ message: "No detectable disease found." });
      return;
    }
    
    const disease = await DiseaseModel.findOne({ DiseaseName: predictedDiseaseName });
    if (!disease) {
      res.status(404).json({
        message: "Disease not found in database.",
      });
      return;
    }
    
    const { temperature, air_humidity, soil_moisture, nitrogen, phosphorus, potassium } = req.body;
    const temperatureData = new TemperatureModel({ value: temperature });
    const airHumidityData = new AirHumidityModel({ value: air_humidity });
    const soilMoistureData = new SoilMoistureModel({ value: soil_moisture });
    const nitrogenData = new NitrogenModel({ value: nitrogen });
    const phosphorusData = new PhosphorusModel({ value: phosphorus });
    const potassiumData = new PotassiumModel({ value: potassium });
    const diseasePredict = new DiseasePredictModel({
      image: imageUrl,
      disease_id: disease._id,
    });
    await temperatureData.save();
    await airHumidityData.save();
    await soilMoistureData.save();
    await nitrogenData.save();
    await phosphorusData.save();
    await potassiumData.save();
    await diseasePredict.save();

    const logger = new LoggerModel({
      temperature_id: temperatureData._id,
      air_humidity_id: airHumidityData._id,
      soil_moisture_id: soilMoistureData._id,
      nitrogen_id: nitrogenData._id,
      phosphorus_id: phosphorusData._id,
      potassium_id: potassiumData._id,
      diseasePredict_id: diseasePredict._id,
      date: new Date(),
    });
    await logger.save();

    res.status(200).json({
      message: "Logger saved successfully",
      diseasePrediction: {
        disease_id: disease._id,
        DiseaseName: disease.DiseaseName,
        Recommend: disease.Recommend,
      },
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
