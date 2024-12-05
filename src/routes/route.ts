import express from 'express';
import { addIot } from '../controllers/iot/addIot';
import { getIot } from '../controllers/iot/getIot';
import {addLogger} from '../controllers/logger/addLogger';
import { addDisease } from '../controllers/disease/disease';
import { getByLogger } from '../controllers/logger/getByLogger';
import { getLoggerByID } from '../controllers/logger/getLoggerByID';


const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        message: "this is admin router",
    });
});

router.post("/addIot",addIot);
router.get("/getIot",getIot);
router.post("/addLogger",addLogger);
router.post("/addDisease",addDisease); 
router.get("/getByLogger",getByLogger);
router.get("/getLoggerByID/:id",getLoggerByID); 


export default router;