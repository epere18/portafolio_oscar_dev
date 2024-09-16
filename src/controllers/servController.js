const path = require("path");
const fs = require("fs");

const servController = {

service : (req, res) => {
    res.render("services", {title: "Servicios"});
}

}





module.exports = servController;