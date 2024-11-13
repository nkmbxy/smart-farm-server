import mongoose, { Schema, model } from "mongoose";
import { 
    IotInterface, 
    LoggerInterface, 
    TemperatureInterface, 
    AirHumidityInterface, 
    SoilMoistureInterface, 
    NitrogenInterface, 
    PhosphorusInterface, 
    PotassiumInterface, 
    DiseasePredictInterface, 
    DiseaseInterface 
} from "../interface/Model";

const IotSchema = new Schema<IotInterface>({
    iot_id: { type: String },
    status_iot: { type: Boolean }
});

export const IoTModel = model("Iot", IotSchema);

const LoggerSchema = new Schema<LoggerInterface>({
    iot_id: { type: mongoose.Schema.Types.ObjectId, ref: "IoT" },
    date: { type: Date, default: Date.now },
    temperature_id: { type: mongoose.Schema.Types.ObjectId, ref: "Temperature" },
    air_humidity_id: { type: mongoose.Schema.Types.ObjectId, ref: "AirHumidity" },
    soil_moisture_id: { type: mongoose.Schema.Types.ObjectId, ref: "SoilMoisture" },
    nitrogen_id: { type: mongoose.Schema.Types.ObjectId, ref: "Nitrogen" },
    phosphorus_id: { type: mongoose.Schema.Types.ObjectId, ref: "Phosphorus" },
    potassium_id: { type: mongoose.Schema.Types.ObjectId, ref: "Potassium" },
    diseasePredict_id: { type: mongoose.Schema.Types.ObjectId, ref: "DiseasePredict" },
});

export const LoggerModel = model("Logger", LoggerSchema);

const TemperatureSchema = new Schema<TemperatureInterface>({
    logger_id: { type: mongoose.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});

export const TemperatureModel = model("Temperature", TemperatureSchema);

const AirHumiditySchema = new Schema<AirHumidityInterface>({
    logger_id: { type: mongoose.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});

export const AirHumidityModel = model("AirHumidity", AirHumiditySchema);

const SoilMoistureSchema = new Schema<SoilMoistureInterface>({
    logger_id: { type: mongoose.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});

export const SoilMoistureModel = model("SoilMoisture", SoilMoistureSchema);

const NitrogenSchema = new Schema<NitrogenInterface>({
    logger_id: { type: mongoose.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});

export const NitrogenModel = model("Nitrogen", NitrogenSchema);

const PhosphorusSchema = new Schema<PhosphorusInterface>({
    logger_id: { type: mongoose.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});

export const PhosphorusModel = model("Phosphorus", PhosphorusSchema);

const PotassiumSchema = new Schema<PotassiumInterface>({
    logger_id: { type: mongoose.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});

export const PotassiumModel = model("Potassium", PotassiumSchema);

const DiseasePredictSchema = new Schema<DiseasePredictInterface>({
    logger_id: { type: mongoose.Schema.Types.ObjectId, ref: "Logger" },
    image: { type: String },
    disease_id: { type: mongoose.Schema.Types.ObjectId, ref: "Disease" }
});

export const DiseasePredictModel = model("DiseasePredict", DiseasePredictSchema);

const DiseaseSchema = new Schema<DiseaseInterface>({
    DiseaseName: { type: String },
    Recommend: { type: String }
});

export const DiseaseModel = model("Disease", DiseaseSchema);
