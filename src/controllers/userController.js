const fs = require('fs');
const path = require('path');
const { v4: newId } = require('uuid');
newId();
//const oldDb = require('../data/users.json')
const db = require('../database/models');
const Usuario = require('../database/models/Usuario');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let userController = {
    register: (req, res) => {
        res.render('users/register');
    },

    createUser: (req, res) => {

        db.Usuario
            .create(
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
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
            password: req.body.password,
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
    },
    login: (req, res) => {
        db.Usuario.findOne(
            {
                where:
                    { username: req.body.username }
            })
            .then((usuario) => {
                if (usuario.password == req.body.password) { res.send(usuario) }
                else {
                    res.send("Wrong password")
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



}

module.exports = userController;