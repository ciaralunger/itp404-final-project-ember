import Ember from 'ember';
import ENV from 'final/config/environment';

export default Ember.Route.extend({
	model: function (params) {
		//var locationId = params.li;
		var url = 'http://localhost:3000/api/meals';

		//console.log(params);

		return Ember.$.ajax({
			url: url
		}).then (function (meals) {
			return { 
				meals: meals, 
				locationId: params.li 
			};
		});
	}
});
