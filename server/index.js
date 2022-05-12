const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose")

const userRoute = require("./route/users");
const authRoute = require("./route/auth");

dotenv.config({path: path.resolve(__dirname, "./.env")});

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, (err) => {
    if(err) {
        console.log(err);
        process.exit(0);
    }
    console.log("Connected To MongoDB");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

app.listen(8800, () => {
    console.log("server is running!");
})