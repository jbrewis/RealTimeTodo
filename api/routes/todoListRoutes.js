'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/items')
    .get(todoList.list_all_items)
    .post(todoList.create_a_item);


  app.route('/items/:itemId')
    .get(todoList.read_a_item)
    .put(todoList.update_a_item)
    .delete(todoList.delete_a_item);
};