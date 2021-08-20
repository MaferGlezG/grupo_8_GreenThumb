const fs = require('fs');
const path = require('path');
const { v4: newId } = require('uuid');
newId();
const db = require('../data/users.json')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let userController = {
    register: (req, res) => {
        res.render('users/register');
    },

    createUser: (req, res) => {
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
        }
    },


}

module.exports = userController;