/**
 * Test api
 */


module.exports = function (app) {

  app.get('/test', (req, res) => {
    res.json({
      getTestPass: true
    });
  });

  app.post('/test', (req, res) => {
    res.json({
      postTestPass: true
    });
  });

  app.put('/test', (req, res) => {
    res.json({
      putTestPass: true
    });
  });

  app.delete('/test', (req, res) => {
    res.json({
      deleteTestPass: true
    });
  });

  app.post('/test/error', (req, res) => {
    res.sendStatus(400);
  });
};
