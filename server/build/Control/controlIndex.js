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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlIndex = void 0;
const database_1 = __importDefault(require("../database"));
class ControlIndex {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM equipos', function (err, equipos, fields) {
                if (err)
                    throw err;
                res.json(equipos);
            });
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO equipos set ?', [req.body]);
            // console.log(req.body);
            res.json('Equipo Agregado');
        });
    }
    quitar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM equipos WHERE id = ?', [id]);
            res.json('equipo Eliminado ' + req.params.id);
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.body);
            for (let i of [0, 1, 2, 3]) {
                console.log(i);
                yield database_1.default.query('UPDATE equipos set ? WHERE id = ?', [req.body[i], i + 1]);
            }
            ;
            res.json('tabla actualizada');
        });
    }
    ordenar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM equipos ORDER BY puntos DESC', function (err, equipos, fields) {
                if (err)
                    throw err;
                res.json(equipos);
            });
        });
    }
}
exports.controlIndex = new ControlIndex();
