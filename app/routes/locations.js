import Ember from 'ember';
import ENV from 'final/config/environment';

//console.log(ENV);

export default Ember.Route.extend({
	model: function () {
		return Ember.$.ajax({
			url: 'http://localhost:3000/api/locations'
		}).then (function (json) {
			return json;
		});
	}
});
