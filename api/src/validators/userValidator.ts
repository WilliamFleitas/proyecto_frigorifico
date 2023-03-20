
import { Request, Response, NextFunction } from "express";
import { userType } from "../typos";
const {check } = require("express-validator");
const {validateResult} = require("./validatorHelpers/validateHelper");
const {User} = require("../database");


const createUserValidate = [
    check('username').exists().not().isEmpty().withMessage('Minimo 5+ caracteres de longitud').isLength({ min: 5 }),
    check('password' , 'Minimo 8+ caracteres de longitud y contener por lo menos un numero').exists().not().isEmpty().withMessage('Falta password').not()
    .isIn(['123', 'password', 'god', 'asdasd'])
    .withMessage('No usar palabras comunes como contraseña')
    .isLength({ min: 8 })
    .matches(/\d/),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];

const signUserValidate = [
    check('username').exists().not().isEmpty().withMessage('Ingrese un nombre de usuario').custom((value: string) => {
        return  User.findOne({
            where: { username: value},
          }).then( (user: userType): any => {
            if (!user) {
              return Promise.reject('No se encontro el usuario');
            }
          });
        }),
    check('password' ,).exists().not().isEmpty().withMessage('Ingrese password'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];
module.exports = { createUserValidate, signUserValidate };