App.UserController = Ember.ObjectController.extend({
	delete: function() {
		var user = this.get('model');
		user.deleteRecord();
		user.save();
	},

	update: function() {
		alert('test');
		this.get('model').save();
	}
});