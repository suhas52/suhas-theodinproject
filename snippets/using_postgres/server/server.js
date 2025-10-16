const express = require('express');
const db = require('./db/queries');
const app = express();
const PORT = 8000;
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:5173",
}

app.use(cors(corsOptions))
app.use(express.json())

app.get("/", async (req, res) => {
    const tmp = await db.getAllUsernames();
    res.send(tmp);
})

app.post("/new", (req, res) => {
    console.log("Username to be saved: ", req.body.name[0]);
    db.insertUsername(req.body.name[0])
})

app.get("/delete", (req, res) => {
    db.deleteUsernames()
})
app.listen(PORT, () => {console.log(`server started on port ${PORT}`)});