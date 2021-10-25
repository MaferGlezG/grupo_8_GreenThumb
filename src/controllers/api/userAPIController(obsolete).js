const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const { v4: newId } = require('uuid');
newId();
const db = require('../../database/models');
const Usuario = require('../database/models/Usuario');


const usersFilePath = path.join(__dirname, '../data(obsolete)/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');
const session = require('express-session');

const userController = {

    // listado de usuarios
    users: function (req, res) {
        db.User.findAll()
            .then(function (users) {
                let usuarios = [];
                if(users.length > 0){
                    users.forEach(user => {
                        let array = {
                            id: user.id_user,
                            name: user.name,
                            last_name: user.last_name,
                            email: user.email,
                            image: "http://localhost:3333/img/users/" + user.image,
                            detail: 'http://localhost:3333/api/users/' + user.id
                        };
                        usuarios.push(array);
                    });
                }

                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: "http://localhost:3333/api/users",
                        count: users.length,
                        users: usuarios,
                    },
                })
            })
    },

    // detalle de usuarios
    usersDetail: function (req, res) {
        let id = req.params.id;
        db.User.findByPk(id)
            .then(function (user) {                
                return res.status(200).json({
                    id: user.id,
                    name: user.name,
                    last_name: user.last_name,
                    email: user.email,
                    url_image: "http://localhost:3333/img/users/" + user.image,
                    url_user: "http://localhost:3333/api/users/" + req.params.id,
                    status: 200
                })
            })
        }
};

module.exports = adminProductController;
