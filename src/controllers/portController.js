const path = require("path");
const fs = require("fs");

const portController = {

    port : (req, res) => {
        res.render("portfolio", {title: "Mi Portafolio"});
    }




}



module.exports = portController;