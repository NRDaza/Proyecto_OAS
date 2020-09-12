"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const conexion_db_1 = __importDefault(require("./conexion_db"));
const conx = mysql_1.default.createPool(conexion_db_1.default.database);
conx.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.log('DB is connected');
});
exports.default = conx;
