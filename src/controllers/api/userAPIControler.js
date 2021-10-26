const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const Usuarios = db.Usuario;

const usersAPIController = {
    list: (req, res) => {
        db.Usuario.findAll()
            .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users
                }
                res.json(respuesta);
            })
    },

    detail: (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },
    userProducts: (req, res) => {
        db.Usuario.findByPk(req.params.id, {
            include: ['users']
        })
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },
    create: (req, res) => {
        Usuarios
            .create(
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                    image: req.body.nFileName,
                    user_category_id: req.body.credentials,
                }
            )
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/users/create'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/users/create'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        let userId = req.params.id;
        Usuarios.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
            },
            {
                where: { id: userId }
            })
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/users/update/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/users/update/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        let userId = req.params.id;
        Usuarios
            .destroy({ where: { id: userId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/users/delete/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/users/delete/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    last: (req, res) => {
        Usuarios.findAll({
            order: [
                ['id', 'DESC']
            ],
            limit: 1
        })
            .then(user => {
                console.log(user)
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: 'api/users/last'
                    },
                    data: user
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    }


}

module.exports = usersAPIController;