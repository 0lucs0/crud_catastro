
exports.up = function(knex) {
    return knex.schema.createTable("predios", function(table) {
      table.increments("id_predio");
      table.integer("pre_avaluo").notNullable();
      table.string("pre_nombre", 255).notNullable();
      table.string("pre_departamento", 255).notNullable();
      table.string("pre_municipio", 255).notNullable();
      table.integer("id_pre_propietario").notNullable();
      table.integer("id_pre_construccion").notNullable();
      table.integer("id_pre_terreno").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("predios");
  };