const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Customers = require('../models/customers');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, function(email, password, done) {
    Customers.findOne({where: {email: email}}).then(function (cus) {
        if (!cus || !cus.validatePassword(password)) {
            return done(null, false, {errors: {'email o contraseña': 'equivocados'}})
        }
        return done(null, cus);
    }).catch(done);
}));

module.exports = passport;