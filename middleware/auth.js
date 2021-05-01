require('dotenv').config();
const db = require('../db/models');
const passport = require('passport');
const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//construct the strategy jwt
const options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};
const findUser = (jwt_payload, done) => {
    db.user.findOne(jwt_payload.id)
    .then(user => done(null, user))
    .catch(done)
}

//initialize passport
passport.initialize();

const strategy = new Strategy(options, findUser);

//register the strategy so passport uses it when we call 'passport.authenticate()' in our routes
passport.use(strategy)

//write a funciton to create a jwt token
const createUserToken = (req, user) => {
   
    const validPassword = bcrypt.compareSync(req.body.password, user.password); //returns a boolean

    //if we didn't get a user of the password isn't valid then throw an error
    if (!user || !validPassword) {
        const err = new Error('Invalid credentials !!!!!!!!!!!');
        err.statusCode = 422;
        throw err;
    } else {
        console.log("jwt token is created and returned")
        return jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '30min' },
            console.log(process.env.JWT_SECRET, "$$$$$$$$$$$$$$$$$$$$")
        )
        
    }
    console.log(jwt.sign(), "************") 
}
//look into jwt.sign
module.exports = { createUserToken };