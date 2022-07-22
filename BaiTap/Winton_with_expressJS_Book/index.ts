import express from "express"
import bodyParser from "body-parser";
 import {logger} from "./src/logger/winston";


const port=3500;

const app = express();



app.use(bodyParser.json());





app.get('/', (req, res) => {
    try {
        res.end('hihih')
        throw new Error("tset winston")
    }catch (e) {
        logger.error(e)
    }
})



app.listen(port,()=>{
    console.log("http://localhost:"+port)
})