const express = require('express');
const db = require('./db/queries');
const app = express();
const PORT = 8000;
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:5173",
}

app.use(cors(corsOptions))

app.get("/", async (req, res) => {
    const tmp = await db.getAllUsernames();
    res.send(tmp);
})

app.post("/new", (res, req) => {
    console.log("Username to be saved: ", req.body)
    db.insertUsername("suhas")
})

app.listen(PORT, () => {console.log(`server started on port ${PORT}`)});