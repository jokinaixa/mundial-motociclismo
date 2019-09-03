import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    public async list (req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM games');

        await pool.query('SELECT * FROM games', 
            function (err, games, fields) {
                if (err) throw err;
                
                res.json(games);
            }
        );
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;

        await pool.query('SELECT * FROM games WHERE id = ?', [id], 
            function (err, games, fields) {
                if (err) throw err;

                if (games.length > 0) {
                    return res.json(games[0]);
                }
                res.status(404).json({ text: "The game doesn't exist" });
            }
        );
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games set ?', [req.body], 
            function (err, game, fields) {
                if (err) throw err;

                res.json({ message: 'Game saved'});
            }
        );
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id], 
            function (err, game, fields) {
                if (err) throw err;

                res.json({ message: 'Game updated'});
            }
        );
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        await pool.query('DELETE FROM games WHWERE id = ?', [id], 
            function (err, game, fields) {
                if (err) throw err;

                res.json({ message: 'Game deleted'});
            }
        );
    }
}

const gamesController = new GamesController();
export default gamesController;