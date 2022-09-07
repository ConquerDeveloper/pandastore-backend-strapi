'use strict';

/**
 * producto service.
 */

const {createCoreService} = require('@strapi/strapi').factories;

module.exports = createCoreService('api::producto.producto');

/*
const entry = await strapi.entityService.findMany('api::producto.producto', {
  fields: ["titulo", "descripcion", "stock", "precio_unidad", "en_oferta", "destacado"],
  sort: {createdAt: 'DESC'},
  filters: { titulo: 'Hello World' },
  populate: {category: true},
});
*/
