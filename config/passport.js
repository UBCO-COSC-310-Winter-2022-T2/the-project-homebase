const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./database');
const User = require("../models/User");

const verifyCallback = (username, password, done) => {

    User.findOne({ username: username }).then(user => {
        if (!user) {
            return done(null, false, { message: 'No user with that username found.' });
        }
        // TODO: Add bcrypt/hashing and salting
        if (user.password !== password) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    }).catch(err => {
        return done(err);
    });
}

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

// Stores the user's id in the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Retrieves the user's information from the session user id
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    }).then(user => {
        done(null, user);
        }).catch(err => {
            done(err);
        }) 
});

module.exports = passport;
