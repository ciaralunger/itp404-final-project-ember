import Ember from 'ember';
import ENV from 'final/config/environment';

export default Ember.Route.extend({
	model: function (params) {
		var meal = this.modelFor('locations.meals');
		//console.log('meal:', meal);

		var locationId = meal.locationId;
		var mealId = params.mi;
		var url = 'http://localhost:3000/api/restaurants?li=' + locationId + '&mi=' + mealId;

		//console.log('params:', params);

		return Ember.$.ajax({
			url: url
		}).then (function (restaurants) {
			console.log(restaurants);
			return { 
				restaurants: restaurants, 
				mealID: mealId,
				locationID: locationId
			};
		});
	},
	setupController: function(controller, model) {
		//console.log('restaurantModel:', model);
	    controller.set('model', model.restaurants);
	    controller.set('mealID', model.mealID);
	    controller.set('locationID', model.locationID);
	    //console.log(controller.get('model'));
	}
});
