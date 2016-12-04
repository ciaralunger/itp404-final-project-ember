import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		//createRestaurant for form and button
	    createRestaurant: function(e) {
	    	//prevent refresh
	    	e.preventDefault();

	      	//console.log(this.get('restaurantName'), this.get('locationID'), this.get('mealID'));

	      	if (this.restaurantName) {
		      	//get variables from route setupController and form
		      	var restaurantName = this.get('restaurantName');
		      	var mealID = this.get('mealID');
		      	var locationID = this.get('locationID');

		      	//post restaurant with given meal/location, and user-input name
		      	var promise = Ember.$.ajax({
					type:'post',
					url: 'https://ciara-lunger-api.herokuapp.com/api/restaurants',
					data: {
						name: restaurantName,
						mealId: mealID,
						locationId: locationID
					}
				});

				promise.then((response) => {
					//alert('cool');

					//Reset name variable
					this.set('restaurantName', null);

					//Push object to list
					var restaurants = this.get('model');
					//console.log('model:', restaurants);
					//console.log('response:', response);
					restaurants.pushObject(response);
				}, function () {
					alert('alert');
				});		
			} else {
				alert('Please type a name for your restaurant');
			}	
    	}
  	}
});
