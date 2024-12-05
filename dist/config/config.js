"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.predictURL = exports.supabaseKey = exports.supabaseUrl = exports.firebase = exports.MONGODB_URI = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = Number(process.env.PORT) || 4000;
exports.MONGODB_URI = String(process.env.MONGODB_URI);
exports.firebase = String(process.env.firebase);
exports.supabaseUrl = String(process.env.SUPABASE_URL);
exports.supabaseKey = String(process.env.SUPABASE_KEY);
exports.predictURL = String(process.env.predictURL);
