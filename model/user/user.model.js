
const User = require("./user.schema");
const passport = require("passport");

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


module.exports.login = (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            res.status(500).json(err);
        }
        if (user){
            let data = {
                accessToken: user.generateJwt()
            }
            return res.status(200).json(data);
        }
        
    })(req, res);
}