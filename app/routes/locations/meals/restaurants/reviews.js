import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		this.modelFor('locations.meals.restaurants');
		//console.log('restaurants:', restaurants);
		
		//var mealId = restaurants.mealID;

		//restaurant id and url
		var restaurantId = params.ri;
		var url = 'https://ciara-lunger-api.herokuapp.com/api/reviews?ri=' + restaurantId;

		//console.log('params:', params);

		return Ember.$.ajax({
			url: url
		}).then (function (data) {
			//console.log('data:', data);
			return {
				data: data,
				restaurantID: restaurantId
			};
		});
	},
	setupController: function(controller, model) {
	    controller.set('model', model);
	    controller.set('restaurantId', model.restaurantID);
	    //console.log(controller.get('restaurantId'));
	}
});
