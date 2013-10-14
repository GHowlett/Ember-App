App.EditableTextComponent = Ember.Component.extend({
	tagName: 'span',
	classNameBindings: ['class'],
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},
		update: function() {
			this.set('isEditing', false);
			this.sendAction('update');
		}
	}
});