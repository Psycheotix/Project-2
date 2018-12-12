module.exports = function(sequelize, Sequelize) {

	var ItemsProcedures = sequelize.define("ItemsProcedures", {
		itemsProceduresId: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		 }
	});

	ItemsProcedures.associate = function(models) {
		ItemsProcedures.hasMany(models.Items);
		ItemsProcedures.hasMany(models.Procedures);
	};
	return ItemsProcedures;
};
