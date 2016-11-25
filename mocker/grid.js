/**
 * Grid service
 */

module.exports = function (app) {

  app.get('/grid-resources', (req, res) => {
    res.json({
      totalItems: 100,
      totalPages: 4,
      list: [{
        avatar: 'http://localhost:4300/demo-pic-1.jpg',
        name: 'Ash Lee',
        dob: '1982-09-11',
        height: 175
      }, {
        avatar: 'http://localhost:4300/demo-pic-2.jpg',
        name: 'Jari Mäenpää',
        dob: '1977-12-23',
        height: 184
      }, {
        avatar: 'http://localhost:4300/demo-pic-1.jpg',
        name: 'Ash Lee',
        dob: '1982-09-11',
        height: 175
      }, {
        avatar: 'http://localhost:4300/demo-pic-2.jpg',
        name: 'Jari Mäenpää',
        dob: '1977-12-23',
        height: 184
      }, {
        avatar: 'http://localhost:4300/demo-pic-1.jpg',
        name: 'Ash Lee',
        dob: '1982-09-11',
        height: 175
      }, {
        avatar: 'http://localhost:4300/demo-pic-2.jpg',
        name: 'Jari Mäenpää',
        dob: '1977-12-23',
        height: 184
      }]
    });
  });
};
