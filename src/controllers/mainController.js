const path = require("path");
const fs = require("fs");
const { title } = require("process");

const mainController = {

    index : (req, res) => {
        res.render("index",{title: "Web & Data Analytics Freelancer"});
    },

    contact : (req, res) => {
        res.render("contacto", {title: "Contacto"});
    },

    perfil : (req, res) => {
        res.render("perfil", {title: "Mi Perfil"});
    }




}




module.exports = mainController;