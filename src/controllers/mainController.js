const path = require("path");
const fs = require("fs");
const { title } = require("process");

const mainController = {

    index : (req, res) => {
        res.render("index",{title: "Home"});
    }




}




module.exports = mainController;