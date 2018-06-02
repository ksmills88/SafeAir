var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
        session: false
    },
    function (username, password, done) {
        console.log(username, password);
        users.findOne({
            username: username
        }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        });
    }
));