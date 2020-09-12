"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlIndex_1 = require("../Control/controlIndex");
class IndexRutas {
    constructor() {
        this.ruta = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.ruta.get('/', controlIndex_1.controlIndex.lista);
        this.ruta.post('/', controlIndex_1.controlIndex.agregar);
        this.ruta.delete('/:id', controlIndex_1.controlIndex.quitar);
        this.ruta.put('/:id', controlIndex_1.controlIndex.actualizar);
        this.ruta.get('/orden', controlIndex_1.controlIndex.ordenar);
    }
}
const indexRutas = new IndexRutas();
exports.default = indexRutas.ruta;
