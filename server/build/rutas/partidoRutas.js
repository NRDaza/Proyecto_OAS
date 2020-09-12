"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlPartido_1 = require("../Control/controlPartido");
class RutaPartido {
    constructor() {
        this.ruta = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.ruta.get('/', controlPartido_1.controlPartido.index);
    }
}
const rutaPartido = new RutaPartido();
exports.default = rutaPartido.ruta;
