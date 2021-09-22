const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const { v4: newId } = require('uuid');
newId();
//const oldDb = require('../data/users.json')
const db = require('../database/models');
const Usuario = require('../database/models/Usuario');


const usersFilePath = path.join(__dirname, '../data(obsolete)/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');
const session = require('express-session');

let userController = {
    register: (req, res) => {
        res.render('users/register');
    },

    createUser: (req, res) => {
        const hash = bcrypt.hashSync(req.body.password, 10);
        db.Usuario
            .create(
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                    user_category_id: req.body.credentials,

                }
            )
            .then(() => {
                return res.redirect('/')
            })

            .catch(error => res.send(error))
        /*
        ******MÉTODO ANTIGUO (JSON)********
        let newUser = {
            id: newId(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: bcrypt.hashSync(req.body.password),
            color: req.body.exampleColorInput,
            credentials: req.body.credentials,
            picture: req.body.picture,
        }

        try {
            users.push(newUser);
            fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2))
            res.redirect('/');
        } catch (error) {
            console.log(error.message)
        }*/
        const result = validationResult (req);
        if (result.errors.length > 0) {
            return res.render('users/register', {
                errors: result.mapped()
            })
        };
    }, 
    login: (req, res) => {

        db.Usuario.findOne(
            {
                where:
                    { username: req.body.username }
            })
            .then((usuario) => {
                //login para usuarios de prueba (creados directo con la base de datos, no hash)
                if (usuario.id = '1' || '2' || '3' || '4') {

                    if (req.body.password == usuario.password) {

                        req.session.userLogged = usuario;
                        console.log(req.session)
                        res.redirect('/user/profile');


                    }
                    else {
                        res.send("Wrong password")
                    }
                }

                //login para usuarios reales (hasheados)
                else {
                    let passwordCheck = bcrypt.compareSync(req.body.password, usuario.password);

                    if (passwordCheck) {

                        req.session.userLogged = usuario;
                        console.log(req.session)
                        res.redirect('/user/profile');


                    }
                    else {
                        res.send("Wrong password")
                    }
                }
            })

            .catch(error => res.send(error))



    },
    destroy: (req, res) => {
        let userId = req.params.id;
        db.Usuario.destroy({
            where: { id: userId }
        })
            .then(() => {
                return res.redirect('/')
            })
            .catch(error => res.send(error))
    },
    profile: (req, res) => {
        res.render('users/profile', {
            user: req.session.userLogged
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }


}

module.exports = userController;