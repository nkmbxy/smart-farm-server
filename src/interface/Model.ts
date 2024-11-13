import { ObjectId } from "mongoose";

export interface IotInterface  {
    iot_id: string;
    status_iot: boolean;
}

export interface LoggerInterface  {
    iot_id: ObjectId;
    date: Date;
    temperature_id: ObjectId;
    air_humidity_id: ObjectId;
    soil_moisture_id: ObjectId;
    nitrogen_id: ObjectId;
    phosphorus_id: ObjectId;
    potassium_id: ObjectId;
    diseasePredict_id: ObjectId;
}

export interface TemperatureInterface  {
    logger_id: ObjectId;
    value: number;
}

export interface AirHumidityInterface  {
    logger_id: ObjectId;
    value: number;
}

export interface SoilMoistureInterface  {
    logger_id: ObjectId;
    value: number;
}

export interface NitrogenInterface  {
    logger_id: ObjectId;
    value: number;
}

export interface PhosphorusInterface  {
    logger_id: ObjectId;
    value: number;
}

export interface PotassiumInterface {
    logger_id: ObjectId;
    value: number;
}

export interface DiseasePredictInterface  {
    logger_id: ObjectId;
    image: string;
    disease_id: ObjectId;
}

export interface DiseaseInterface  {
    DiseaseName: string;
    Recommend: string;
}
