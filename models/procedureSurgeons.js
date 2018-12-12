module.exports = function(sequelize, Sequelize) {

	var ProcedureSurgeons = sequelize.define("ProcedureSurgeons", {
		ProcedureSurgeonsId: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		 }
	});

	ProcedureSurgeons.associate = function(models) {
		ProcedureSurgeons.hasMany(models.Surgeons);
		ProcedureSurgeons.hasMany(models.Procedures);
	};
	return ProcedureSurgeons;
};
