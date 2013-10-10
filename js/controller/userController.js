App.UserController = Ember.ObjectController.extend({
	deleteUser: function() {
		var user = this.get('model');
		user.deleteRecord();
		user.save();
	}
});