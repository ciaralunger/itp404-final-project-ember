import Ember from 'ember';
import ENV from 'final/config/environment';

export default Ember.Controller.extend({
	actions: {
		//createReview function for text area
		createReview: function(e) {
			e.preventDefault();

			if (this.reviewText) {
				//Review text and restaurantId from form and model
				var restaurantId = this.get('restaurantId');
				var reviewText = this.get('reviewText');

				var promise = Ember.$.ajax({
					type:'post',
					url: 'http://localhost:3000/api/reviews',
					data: {
						reviewText: reviewText,
						restaurantId: restaurantId
					}
				});

				promise.then((response) => {
					//alert('yo');

					//Reset reviewText variable
					this.set('reviewText', null);

					//Push object to list
					var reviews = this.get('model.data');
					//console.log('model:', reviews);
					//console.log('response:', response);
					reviews.pushObject(response);
				}, function() {
					alert('Error');
				});
			} else {
				alert('Please add text to your review');
			}
		}	
	}
});
