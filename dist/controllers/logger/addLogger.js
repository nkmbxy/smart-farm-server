"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLogger = void 0;
const model_1 = require("../../models/model");
const uploadImage_1 = require("../../utils/uploadImage");
const axios_1 = __importDefault(require("axios"));
const addLogger = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.file;
        // if (!file) {
        //   return res.status(400).send("Please upload a file");
        // }
        const imageUrl = yield (0, uploadImage_1.uploadImage)(file);
        const predictImage = yield axios_1.default.post("http://127.0.0.1:8000/predict", { imageArr: [imageUrl] }).then((response) => {
            return response.data;
        }).catch((error) => { console.log(error); });
        const { temperature, air_humidity, soil_moisture, nitrogen, phosphorus, potassium } = req.body;
        const temperatureData = new model_1.TemperatureModel({ value: temperature });
        const airHumidityData = new model_1.AirHumidityModel({ value: air_humidity });
        const soilMoistureData = new model_1.SoilMoistureModel({ value: soil_moisture });
        const nitrogenData = new model_1.NitrogenModel({ value: nitrogen });
        const phosphorusData = new model_1.PhosphorusModel({ value: phosphorus });
        const potassiumData = new model_1.PotassiumModel({ value: potassium });
        const predictImageName = new model_1.DiseasePredictModel({ image: imageUrl });
        yield temperatureData.save();
        yield airHumidityData.save();
        yield soilMoistureData.save();
        yield nitrogenData.save();
        yield phosphorusData.save();
        yield potassiumData.save();
        yield predictImageName.save();
        const Logger = new model_1.LoggerModel({
            temperature_id: temperatureData._id,
            air_humidity_id: airHumidityData._id,
            soil_moisture_id: soilMoistureData._id,
            nitrogen_id: nitrogenData._id,
            phosphorus_id: phosphorusData._id,
            potassium_id: potassiumData._id,
            diseasePredict_id: predictImageName._id,
            date: new Date(),
        });
        yield Logger.save();
        res.send({
            message: "Logger added successfully",
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.addLogger = addLogger;
