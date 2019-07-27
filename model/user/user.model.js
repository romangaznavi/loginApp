
const User = require("./user.schema");
module.exports.register = (req, res, next) => {

    const data = {
        name: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    }

    User.create(data)
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(error => res.status(500).json(error));
}