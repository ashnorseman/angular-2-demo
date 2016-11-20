/**
 * Test api
 */


module.exports = function (app) {

  app.post('/authenticate', (req, res) => {
    res.json({
      token: 'authenticated'
    });
  });
};
