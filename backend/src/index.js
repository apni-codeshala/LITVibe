const express = require("express");

const connect = require("./config/index");

const app = express();

app.listen(4000, async () => {

    console.log("Server started at port 4000");

    try {
        await connect();
        console.log("DB connnected successful");
    } catch (error) {
        console.log("DB connection failed");
    }

});
