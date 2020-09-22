import passportJWT from 'passport-jwt'
import User from '../model/User.model'
import config from '../config'

const cookieExtractor = (req) => {
  return req && req.cooqies && req.cooqies.token
}

const jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([cookieExtractor])
}

const jwtStrategy = new passportJWT.Strategy(jwtOptions, (jwtPayload, done) => {
  User.findById(jwtPayload.uid, (err, user) => {
    if (err) {
      return done(err, null)
    }
    if (user) {
      return done(null, user)
    }
    return done(null, false)
  })
})

exports.jwt = jwtStrategy