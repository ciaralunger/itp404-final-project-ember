import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		//var locationId = params.li;
		var url = 'https://ciara-lunger-api.herokuapp.com/api/meals';

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
