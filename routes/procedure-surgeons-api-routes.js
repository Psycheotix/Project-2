var db = require("../models");

module.exports = function(app) {
  app.get("/api/procedureSurgeons", function(req, res) {
    db.procedureSurgeons.findAll({}).then(function(dbProcedureSurgeons) {
      res.json(dbProcedureSurgeons);
    });
  });

  app.get("/api/procedure/:id", function(req, res) {
    db.procedureSurgeons.findOne({
      where: {
			procedureSurgeonsId: req.params.id
      }
    }).then(function(dbProcedureSurgeons) {
      res.json(dbProcedureSurgeons);
    });
  });

};
