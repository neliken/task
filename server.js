require('dotenv').config()
const console = require('console');
const express = require("express");
const db = require('./db');

const app = express();

app.use(express.json());

app.get("/getData", async (req, res) => {
    
    try{
        const results = await db.query("SELECT * FROM transaction");
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    }catch(error){
        console.log(error);
    }
    
});

app.get("/api/v1/data/:dataid", (req, res) => {
    console.log(req);
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log("Server is up and listening on port", port);
});
