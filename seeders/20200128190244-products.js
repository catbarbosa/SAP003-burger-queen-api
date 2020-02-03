'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('products', [{
  //   name: 'Café americano',
  //   price:5,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Café com leite',
  //   price:7,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Misto Quente',
  //   price:10,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Suco de fruta natural',
  //   price:7,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Hambúrguer simples carne bovina',
  //   price:10,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Hambúrguer simples frango',
  //   price:10,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Hambúrguer simples vegetariano',
  //   price:10,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Hambúrguer duplo carne bovina',
  //   price:15,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Hambúrguer duplo frango',
  //   price:10,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Hambúrguer duplo vegetariano',
  //   price:10,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Ovo',
  //   price:1,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Queijo',
  //   price:1,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Batata frita',
  //   price:5,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Anéis de cebola',
  //   price:5,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Água 500ml',
  //   price:5,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Água 750ml',
  //   price:7,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Refrigerante 500ml',
  //   price:7,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },{
  //   name: 'Refrigerante 750ml',
  //   price:10,
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // },
  // {
    name:'Bolo de Chocolate',
    price:5,
    createdAt:new Date(),
    updatedAt:new Date()
  }
])
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('products', null, {});
  }
};
