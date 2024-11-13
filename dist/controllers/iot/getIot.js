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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIot = void 0;
const model_1 = require("../../models/model");
const getIot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const iot = yield model_1.IoTModel.find();
        res.send({
            message: "Iot data",
            iot,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Internal server error",
        });
    }
});
exports.getIot = getIot;
