"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addIot_1 = require("../controllers/iot/addIot");
const getIot_1 = require("../controllers/iot/getIot");
const addLogger_1 = require("../controllers/logger/addLogger");
const disease_1 = require("../controllers/disease/disease");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send({
        message: "this is admin router",
    });
});
router.post("/addIot", addIot_1.addIot);
router.get("/getIot", getIot_1.getIot);
router.post("/addLogger", addLogger_1.addLogger);
router.post("/addDisease", disease_1.addDisease);
exports.default = router;
