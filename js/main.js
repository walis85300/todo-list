$(function(){

	Backbone.$ = $;

	var Todo = Backbone.Model.extend({});

	var TodoList = Backbone.Collection.extend({

		model: Todo

	});

	var Todos = new TodoList;
	
	var TodoView = Backbone.View.extend({

		tagName: 'li',

		template: Handlebars.compile($("#item-template").html()),

		initialize: function() {

			this.listenTo(this.model,"change",this.render,this);

		},

		render: function(){

			var item = 	this.model.toJSON();
			var html = this.template(item);
			this.$el.html(html);
			return this;

		}

	});

	var AppView = Backbone.View.extend({

		el: $('#todos'),

		// template: Handlebars.compile($("#item-template").html()),

		events: {

			"keypress #new-todo": "createOnEnter"

		},

		initialize: function(){

			this.input = this.$("#new-todo");

			this.listenTo(Todos,"add",this.addOne,this);

		},

		createOnEnter: function(e){

			if (e.keyCode != 13) return;
			if (!this.input.val()) return;

			Todos.add({title: this.input.val()});
			this.input.val('');


		},

		addOne: function(todo){

			var view = new TodoView({model: todo});
			this.$('#todo-list').append(view.render().el)

		}

	});

	var App = new AppView();

});




