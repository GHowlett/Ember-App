App.Router.map( function(){
  this.resource('about');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {return this.store.find('user');}
});