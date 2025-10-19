const path = require('node:path');
const { Pool } = require('pg');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const PORT = 3000;
const cors = require('cors');

const pool = new Pool({ 
    host: "localhost",
    user: "suhas",
    database: "basic_auth",
    password: "Suhas9980",
    port: 5432
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.post("/sign-up", async (req, res, next) => {
    try {
        await pool.query("INSERT INTO USERS (username, password) VALUES ($1, $2)", [
            req.body.username,
            req.body.password
        ])
        res.status(200).json({success: "Successfully added user"});
    } catch (err){
        throw(err);
    }
})

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
            const user = rows[0];
            
            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            }
            if (user.password !== password) {
                return done(null, false, { message: "Incorrect password" });
            }
            return done(null, user);
        } catch(err) {
            return done(err);
        }
    })
);


app.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("App listening on port: ", PORT)
    }
}) 