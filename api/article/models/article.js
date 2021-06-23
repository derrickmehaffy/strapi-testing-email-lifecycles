"use strict";
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  lifecycles: {
    beforeCreate(...args) {
      // console.log('beforeCreate', ...args);
    },
    async afterCreate(result) {
      let payload = {
        subject:
          "New Article created by: " +
          result.created_by.firstname +
          " " +
          result.created_by.lastname,
        text:
          "A new article was created with the following data:\r\n" +
          JSON.stringify(
            sanitizeEntity(result, { model: strapi.models.article }),
            null,
            2
          ),
      };

      await strapi.config.functions["sendEmail"](payload);
    },
    beforeUpdate(...args) {
      // console.log('beforeUpdate', ...args);
    },
    async afterUpdate(result, params, data) {
      let payload = {
        subject:
          "Existing Article updated by: " +
          result.updated_by.firstname +
          " " +
          result.updated_by.lastname,
        text:
          "An existing article was updated with the following data:\r\n" +
          JSON.stringify(
            sanitizeEntity(result, { model: strapi.models.article }),
            null,
            2
          ),
      };

      await strapi.config.functions["sendEmail"](payload);
    },
    beforeDelete(...args) {
      // console.log('beforeDelete', ...args);
    },
    async afterDelete(result) {
      let payload = {
        subject:
          "Existing Article deleted by: " +
          result.updated_by.firstname +
          " " +
          result.updated_by.lastname,
        text:
          "An existing article was deleted:\r\n" +
          JSON.stringify(
            sanitizeEntity(result, { model: strapi.models.article }),
            null,
            2
          ),
      };

      await strapi.config.functions["sendEmail"](payload);
    },
    beforeFind(...args) {
      // console.log('beforeFind', ...args);
    },
    afterFind(...args) {
      // console.log('afterFind', ...args);
    },
    beforeFindOne(...args) {
      // console.log('beforeFindOne', ...args);
    },
    afterFindOne(...args) {
      // console.log('afterFindOne', ...args);
    },
    beforeCount(...args) {
      // console.log('beforeCount', ...args);
    },
    afterCount(...args) {
      // console.log('afterCount', ...args);
    },
    beforeSearch(...args) {
      // console.log('beforeSearch', ...args);
    },
    afterSearch(...args) {
      // console.log('afterSearch', ...args);
    },
    beforeCountSearch(...args) {
      // console.log('beforeCountSearch', ...args);
    },
    afterCountSearch(...args) {
      // console.log('afterCountSearch', ...args);
    },
  },
};
