//**Requiers */ 
 
 const express = require("express");
 const path = require("path");

const mainRoute = require("./routes/mainRoute");
const portRoute = require("./routes/portRoute");
const servRoute = require("./routes/servRoute");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//**Middleware */

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//**Templates engine EJS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//**Serve static files from React frontend */
app.use(express.static(path.join(__dirname, "cliente/client/build")));

//**Routes */
app.use("/", mainRoute);
app.use("/portafolio", portRoute);
app.use("/servicios", servRoute);

//**Server */
const puerto = "3001";
app.listen(puerto, () => {
    console.log(`Servidor Web corriendo en el ${puerto}`);
})



 module.exports = app;
