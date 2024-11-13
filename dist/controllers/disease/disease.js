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
exports.addDisease = void 0;
const model_1 = require("../../models/model");
const addDisease = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { DiseaseName, Recommend } = req.body;
        const Disease = new model_1.DiseaseModel({ DiseaseName: DiseaseName, Recommend: Recommend });
        yield Disease.save();
        res.send({
            message: "Disease added successfully",
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.addDisease = addDisease;
