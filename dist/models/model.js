"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiseaseModel = exports.DiseasePredictModel = exports.PotassiumModel = exports.PhosphorusModel = exports.NitrogenModel = exports.SoilMoistureModel = exports.AirHumidityModel = exports.TemperatureModel = exports.LoggerModel = exports.IoTModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const IotSchema = new mongoose_1.Schema({
    iot_id: { type: String },
    status_iot: { type: Boolean }
});
exports.IoTModel = (0, mongoose_1.model)("Iot", IotSchema);
const LoggerSchema = new mongoose_1.Schema({
    iot_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "IoT" },
    date: { type: Date, default: Date.now },
    temperature_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Temperature" },
    air_humidity_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "AirHumidity" },
    soil_moisture_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "SoilMoisture" },
    nitrogen_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Nitrogen" },
    phosphorus_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Phosphorus" },
    potassium_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Potassium" },
    diseasePredict_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "DiseasePredict" },
});
exports.LoggerModel = (0, mongoose_1.model)("Logger", LoggerSchema);
const TemperatureSchema = new mongoose_1.Schema({
    logger_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});
exports.TemperatureModel = (0, mongoose_1.model)("Temperature", TemperatureSchema);
const AirHumiditySchema = new mongoose_1.Schema({
    logger_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});
exports.AirHumidityModel = (0, mongoose_1.model)("AirHumidity", AirHumiditySchema);
const SoilMoistureSchema = new mongoose_1.Schema({
    logger_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});
exports.SoilMoistureModel = (0, mongoose_1.model)("SoilMoisture", SoilMoistureSchema);
const NitrogenSchema = new mongoose_1.Schema({
    logger_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});
exports.NitrogenModel = (0, mongoose_1.model)("Nitrogen", NitrogenSchema);
const PhosphorusSchema = new mongoose_1.Schema({
    logger_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});
exports.PhosphorusModel = (0, mongoose_1.model)("Phosphorus", PhosphorusSchema);
const PotassiumSchema = new mongoose_1.Schema({
    logger_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Logger" },
    value: { type: Number }
});
exports.PotassiumModel = (0, mongoose_1.model)("Potassium", PotassiumSchema);
const DiseasePredictSchema = new mongoose_1.Schema({
    logger_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Logger" },
    image: { type: String },
    disease_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Disease" }
});
exports.DiseasePredictModel = (0, mongoose_1.model)("DiseasePredict", DiseasePredictSchema);
const DiseaseSchema = new mongoose_1.Schema({
    DiseaseName: { type: String },
    Recommend: { type: String }
});
exports.DiseaseModel = (0, mongoose_1.model)("Disease", DiseaseSchema);
