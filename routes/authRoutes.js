const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google/',
    passport.authenticate('google', { // forward request to google and request user info
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'), // exchange for token with code
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
