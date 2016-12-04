import Ember from 'ember';

//console.log(ENV);

export default Ember.Route.extend({
	model: function () {
		return Ember.$.ajax({
			url: 'https://ciara-lunger-api.herokuapp.com/api/locations'
		}).then (function (json) {
			return json;
		});
	}
});
