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

export const addLogger = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    // if (!file) {
    //   return res.status(400).send("Please upload a file");
    // }
    const imageUrl = await uploadImage(file);
    const predictImage = await axios.post("http://127.0.0.1:8000/predict",{imageArr:[imageUrl]}).then((response) => {
      return response.data;
    }).catch((error) => {console.log(error)});
    const {temperature, air_humidity, soil_moisture, nitrogen, phosphorus, potassium} = req.body;
    const temperatureData = new TemperatureModel({value:temperature});
    const airHumidityData = new AirHumidityModel({value:air_humidity});
    const soilMoistureData = new SoilMoistureModel({value:soil_moisture});
    const nitrogenData = new NitrogenModel({value:nitrogen});
    const phosphorusData = new PhosphorusModel({value:phosphorus});
    const potassiumData = new PotassiumModel({value:potassium});
    const predictImageName = new DiseasePredictModel({image:imageUrl});
    await temperatureData.save();
    await airHumidityData.save();
    await soilMoistureData.save();
    await nitrogenData.save();
    await phosphorusData.save();
    await potassiumData.save();
    await predictImageName.save();
  const Logger = new LoggerModel({
    temperature_id: temperatureData._id,
    air_humidity_id: airHumidityData._id,
    soil_moisture_id: soilMoistureData._id,
    nitrogen_id: nitrogenData._id,
    phosphorus_id: phosphorusData._id,
    potassium_id: potassiumData._id,
    diseasePredict_id: predictImageName._id,
    date: new Date(),
  })
    await Logger.save();
    res.send({
      message: "Logger added successfully",
    });
  } catch (error: any) {
    console.log(error);
  }
};
