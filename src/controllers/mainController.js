const path = require("path");
const fs = require("fs");
const { title } = require("process");

const mainController = {

    index : (req, res) => {
        res.render("index",{title: "Web & Data Analytics Freelancer"});
    },

    contact : (req, res) => {
        res.render("contacto", {title: "Contacto"});
    }




}




module.exports = mainController;