import { NextFunction, Request, Response, Router } from "express";
import express from "express";
import * as bcrypt from "bcrypt";
import { pool } from "../Database";
import { hashPassword, validatePassword } from "../utils/encrypt";
import jwtGenerator from "../utils/jwtGenerator";

// handling error message
const HTTP_INTERNAL_SERVER_ERROR = 500;
const HTTP_NOT_FOUND = 404;
const HTTP_BAD_REQUEST = 400;

export class UserController {
  private router: Router;

  mount(parentRouter: Router) {
    this.router = express.Router();
    this.router.get("/", this.getUsers);
    this.router.post("/createUser", this.createUser);
    parentRouter.use("/users", this.router);
  }

  private async createUser (req: Request, res: Response, next: NextFunction) {
    try {
      const values = [req.body.user_name, req.body.user_age, req.body.user_address];
      // tslint:disable-next-line:max-line-length
      pool.query('INSERT INTO users(user_name, user_age, user_address) VALUES($1, $2, $3) ON CONFLICT DO NOTHING', values, (q_err, q_res) => {
       if (q_err) {
         return next(q_err);
       };
       console.log(q_res)
       res.json(q_res.rows);
      });
    } catch (err) {
      res.status(HTTP_INTERNAL_SERVER_ERROR).send(err);
    }
  };

  private async getUsers (req: Request, res: Response) {
    try {
      pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
         throw error
        }
        res.status(200).json(results.rows)
       })
    } catch (err) {
      res.status(HTTP_INTERNAL_SERVER_ERROR).send(err);
    }
  };
}
