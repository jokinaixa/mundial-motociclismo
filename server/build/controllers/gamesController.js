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
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games');
            yield database_1.default.query('SELECT * FROM games', function (err, games, fields) {
                if (err)
                    throw err;
                res.json(games);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id], function (err, games, fields) {
                if (err)
                    throw err;
                if (games.length > 0) {
                    return res.json(games[0]);
                }
                res.status(404).json({ text: "The game doesn't exist" });
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games set ?', [req.body], function (err, game, fields) {
                if (err)
                    throw err;
                res.json({ message: 'Game saved' });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE games set ? WHERE id = ?', [req.body, id], function (err, game, fields) {
                if (err)
                    throw err;
                res.json({ message: 'Game updated' });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM games WHWERE id = ?', [id], function (err, game, fields) {
                if (err)
                    throw err;
                res.json({ message: 'Game deleted' });
            });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
