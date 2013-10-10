App.IndexController = Ember.ArrayController.extend({
	actions: {
		addUser: function() {
			var firstname = this.get('firstname').trim();
			var lastname = this.get('lastname').trim();
			var email = this.get('email').trim();

			if (! (firstname && lastname && email) ) return;

			var user = this.store.createRecord('user', {
				'firstname': firstname,
				'lastname': lastname,
				'email': email,
				'photo': "img/smile.png"
			});

			this.set('firstname', '');
			this.set('lastname', '');
			this.set('email', '');

			user.save();
		}
	}
});

		