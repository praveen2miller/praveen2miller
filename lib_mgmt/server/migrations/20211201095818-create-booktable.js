'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Booktables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_id: {
        type: Sequelize.NUMBER
      },
      book_name: {
        type: Sequelize.STRING
      },
      author_name: {
        type: Sequelize.STRING
      },
      edition: {
        type: Sequelize.NUMBER
      },
      publisher: {
        type: Sequelize.NUMBER
      },
      isbn: {
        type: Sequelize.NUMBER
      },
      genre: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Booktables');
  }
};