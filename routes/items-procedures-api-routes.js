var db = require("../models");

module.exports = function(app) {
  app.get("/api/itemsSurgeons", function(req, res) {
    db.itemsSurgeons.findAll({}).then(function(dbItemsSurgeons) {
      res.json(dbItemsSurgeons);
    });
  });

  app.get("/api/itemsSurgeons/:id", function(req, res) {
    db.itemsSurgeons.findOne({
      where: {
			itemsSurgeons: req.params.id
      }
    }).then(function(dbItemsSurgeons) {
      res.json(dbItemsSurgeons);
    });
  });
};
