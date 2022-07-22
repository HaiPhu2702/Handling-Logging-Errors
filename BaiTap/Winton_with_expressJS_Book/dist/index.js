"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const winston_1 = require("./src/logger/winston");
const port = 3500;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    try {
        res.end('hihih');
        throw new Error("tset winston");
    }
    catch (e) {
        winston_1.logger.error(e);
    }
});
app.listen(port, () => {
    console.log("http://localhost:" + port);
});
//# sourceMappingURL=index.js.map