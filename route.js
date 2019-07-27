let UserRoute = require("./model/user/user.route");
module.exports = (app) => {
 app.use("/api/user", UserRoute);

 //default route
 app.use("/", (req, res, next) =>{
    res.status(200).json({message: "Default route called!"});
 });
}