$(function(){

	var Todo = new Backbone.Model.extend({});

	var TodoList = new Backbone.Collection.extend({

		model: Todo

	});

	var Todos = TodoList();

	

});