import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Predios {
    id_predio: ID
    pre_avaluo: Int
    pre_nombre: String
    pre_departamento: String
    pre_municipio: String
    id_pre_propietario: Int
    id_pre_construccion: Int
    id_pre_terreno: Int
  }

  type Propietarios {
    id_propietario: Int
    pro_tipo_doc: String!
    pro_doc: Int!
    pro_nombre: String
    pro_apellido: String
    pro_direccion: String!
    pro_telefono: Int!
    pro_email: String
    id_pro_razon_social: Int!
  }

  type Terreno {
    id_terreno: ID!
    ter_area: Int!
    ter_valor_comercial: Float
    ter_agua: Boolean!
    ter_tipo_terreno: String!
    ter_construccion: Boolean
  }
  type Construccion {
    id_construccion: ID!
    con_pisos: Int!
    con_direccion: String!
    con_tipo_construccion: String!
    con_area: Int!
  }

  type Personsas {
    id_persona: Int
    razonsocial: String
  }

  type Query {
    predios: [Predios!]
    propietarios: [Propietarios!]
    terreno: [Terreno!]
    construccion: [Construccion!]
    personas: [Personsas!]
  }

  type Mutation {
    # Mutaciones crear, ver, borrar y modificar Predios
    crearPredio(
      pre_avaluo: Int!
      pre_nombre: String!
      pre_departamento: String!
      pre_municipio: String!
      id_pre_propietario: Int!
      id_pre_construccion: Int
      id_pre_terreno: Int
    ): Predios

    verPredio(id_predio: ID!): Predios
    borrarPredio(id_predio: ID!): Predios
    modificarPredio(
      id_predio: ID!
      pre_avaluo: Int
      pre_nombre: String
      pre_departamento: String
      pre_municipio: String
      id_pre_propietario: Int
      id_pre_construccion: Int
      id_pre_terreno: Int
    ): Predios

    #Mutacioes de crear, ver, borrar y modificar Cconstrucciones
    crearConstruccion(
      con_pisos: Int!
      con_direccion: String!
      con_tipo_construccion: String!
      con_area: Int!
    ): Construccion
    verConstruccion(id_construccion: ID!): Construccion
    borrarConstruccion(id_construccion: ID!): Construccion
    modificarConstruccion(
      id_construccion: ID!
      con_pisos: Int!
      con_direccion: String!
      con_tipo_construccion: String!
      con_area: Int!
    ): Construccion

    # Mutaciones de crear, ver, borrar y modificar Propietarios
    crearPropietario(
      pro_tipo_doc: String!
      pro_doc: Int!
      pro_nombre: String
      pro_apellido: String
      pro_direccion: String!
      pro_telefono: Int!
      pro_email: String
      id__pro_razon_social: Int
    ): Propietarios
    verPropietario(id_propietario: ID!): Propietarios
    borrarPropietario(id_propietario: ID!): Propietarios
    modificarPropietario(
      id_propietario: ID!
      pro_tipo_doc: String
      pro_doc: Int
      pro_nombre: String
      pro_apellido: String
      pro_direccion: String
      pro_telefono: Int
      pro_email: String
      id_pro_razon_social: Int!
    ): Propietarios

    # Mutaciones de crear, ver, borrar y modificar Terenos
    crearTerreno(
      ter_area: Int!
      ter_valor_comercial: Float!
      ter_agua: Boolean!
      ter_tipo_terreno: String!
      ter_construccion: Boolean
    ): Terreno
    modificarTerreno(
      id_terreno: ID!
      ter_area: Int
      ter_valor_comercial: Float
      ter_agua: Boolean!
      ter_tipo_terreno: String
      ter_construccion: Boolean
    ): Terreno
    verTerreno(id_terreno: ID!): Terreno
    borrarTerreno(id_terreno: ID!): Terreno
  }
`;
