const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID: "226008095779-3hob0qv03mdjjhajfphhg0m8tv0rgpoq.apps.googleusercontent.com",
			clientSecret: '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',
			callbackURL: "/auth/google/callback",
			passReqToCallback: true,
			scope: ["profile", "email"],
		},
		function (request, accessToken, refreshToken, profile, done) {
			return done(null, profile);
		}
	)
);
passport.serializeUser((user,done)=>{done(null,user);});
passport.deserializeUser((user,done)=>{done(null,user);});