import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "1574",
    database: "postgres",
  },
});

export const resolvers = {
  Query: {
    predios: async (_parent, _context) => {
      return (
        await db.select("*").from("predios").orderBy("id_predio").returning("*")
      );
    },

    propietarios: async (_parent, _context) => {
      return (
        await db
          .select("*")
          .from("propietarios")
          .orderBy("id_propietario")
          .returning("*")
      );
    },

    terreno: async (_parent, _context) => {
      return (
        await db
          .select("*")
          .from("terreno")
          .orderBy("id_terreno")
          .returning("*")
      );
    },

    construccion: async (_parent, _context) => {
      return await db
        .select("*")
        .from("construccion")
        .orderBy("id_construccion")
        .returning("*");
    },
    personas: async (_parent, _context) => {
      return (
        await db
          .select("*")
          .from("personas")
          .orderBy("id_persona")
          .returning("*")
      );
    },
  },
  Mutation: {
    // **Mutaciones para Predios */
    crearPredio: async (
      _,
      {
        pre_avaluo,
        pre_nombre,
        pre_departamento,
        pre_municipio,
        id_pre_propietario,
        id_pre_construccion,
        id_pre_terreno,
      },
      _c
    ) => {
      return (
        await db("predios")
          .insert({
            pre_avaluo,
            pre_nombre,
            pre_departamento,
            pre_municipio,
            id_pre_propietario,
            id_pre_construccion,
            id_pre_terreno,
          })
          .returning("*")
      )[0];
    },
    verPredio: async (_, { id_predio }, _c) => {
      return (
        await db.select("*").from("predios").where({ id_predio }).returning("*")
      )[0];
    },

    borrarPredio: async (_, { id_predio }, _c) => {
      return (
        await db.delete("*").from("predios").where({ id_predio }).returning("*")
      )[0];
    },

    modificarPredio: async (
      _,
      {
        id_predio,
        pre_avaluo,
        pre_nombre,
        pre_departamento,
        pre_municipio,
        id_pre_propietario,
        id_pre_construccion,
        id_pre_terreno,
      },
      _c
    ) => {
      return (
        await db
          .table("predios")
          .where({ id_predio })
          .update({
            pre_avaluo,
            pre_nombre,
            pre_departamento,
            pre_municipio,
            id_pre_propietario,
            id_pre_construccion,
            id_pre_terreno,
          })
          .returning("*")
      )[0];
    },

    //**Mutaciones para Propietarios */
    crearPropietario: async (
      _,
      {
        pro_tipo_doc,
        pro_doc,
        pro_nombre,
        pro_apellido,
        pro_direccion,
        pro_telefono,
        pro_email,
      },
      _c
    ) => {
      return (
        await db("propietarios")
          .insert({
            pro_tipo_doc,
            pro_doc,
            pro_nombre,
            pro_apellido,
            pro_direccion,
            pro_telefono,
            pro_email,
          })
          .returning("*")
      )[0];
    },
    verPropietario: async (_, { id_propietario }, _c) => {
      return (
        await db
          .select("*")
          .from("propietarios")
          .where({ id_propietario })
          .returning("*")
      )[0];
    },

    borrarPropietario: async (_, { id_propietario }, _c) => {
      return (
        await db
          .delete("*")
          .from("predios")
          .where({ id_propietario })
          .returning("*")
      )[0];
    },

    modificarPropietario: async (
      _,
      {
        id_propietario,
        pro_tipo_doc,
        pro_doc,
        pro_nombreg,
        pro_apellido,
        pro_direccion,
        pro_telefono,
        pro_email,
      },
      _c
    ) => {
      return (
        await db
          .table("predios")
          .where({ id_propietario })
          .update({
            pro_tipo_doc,
            pro_doc,
            pro_nombreg,
            pro_apellido,
            pro_direccion,
            pro_telefono,
            pro_email,
          })
          .returning("*")
      )[0];
    },

    //**Mutaciones para Construcciones */
    crearConstruccion: async (
      _,
      { con_pisos, con_direccion, con_tipo_construccion, con_area },
      _c
    ) => {
      return (
        await db("construccion")
          .insert({
            con_pisos,
            con_direccion,
            con_tipo_construccion,
            con_area,
          })
          .returning("*")
      )[0];
    },
    verConstruccion: async (_, { id_construccion }, _c) => {
      return (
        await db
          .select("*")
          .from("construccion")
          .where({ id_construccion })
          .returning("*")
      )[0];
    },

    borrarConstruccion: async (_, { id_construccion }, _c) => {
      return (
        await db
          .delete("*")
          .from("construccion")
          .where({ id_construccion })
          .returning("*")
      )[0];
    },

    modificarConstruccion: async (
      _,
      {
        id_construccion,
        con_pisos,
        con_direccion,
        con_tipo_construccion,
        con_area,
      },
      _c
    ) => {
      return (
        await db
          .table("construccion")
          .where({ id_construccion })
          .update({
            con_pisos,
            con_direccion,
            con_tipo_construccion,
            con_area,
          })
          .returning("*")
      )[0];
    },
    // **Mutaciones para Terrenos */
    crearTerreno: async (
      _,
      {
        ter_area,
        ter_valor_comercial,
        ter_agua,
        ter_tipo_terreno,
        ter_construccion,
      },
      _c
    ) => {
      return (
        await db("terreno")
          .insert({
            ter_area,
            ter_valor_comercial,
            ter_agua,
            ter_tipo_terreno,
            ter_construccion,
          })
          .returning("*")
      )[0];
    },
    verTerreno: async (_, { id_terreno }, _c) => {
      return (
        await db
          .select("*")
          .from("terreno")
          .where({ id_terreno })
          .returning("*")
      )[0];
    },

    borrarTerreno: async (_, { id_terreno }, _c) => {
      return (
        await db
          .delete("*")
          .from("terreno")
          .where({ id_terreno })
          .returning("*")
      )[0];
    },

    modificarTerreno: async (
      _,
      {
        id_terreno,
        ter_area,
        ter_valor_comercial,
        ter_agua,
        ter_tipo_terreno,
        ter_construccion,
      },
      _c
    ) => {
      return (
        await db
          .table("terreno")
          .where({ id_terreno })
          .update({
            ter_area,
            ter_valor_comercial,
            ter_agua,
            ter_tipo_terreno,
            ter_construccion,
          })
          .returning("*")
      )[0];
    },
  },
};
