import { test } from 'qunit';
import moduleForAcceptance from 'final/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | restaurants');

test('visiting /locations/3/4 allows restaurant to be added', function(assert) {
  visit('/locations/3/4');
  fillIn('.restaurantName', 'New restaurant');
  click('button');

  andThen(function() {
	assert.equal(find('.restaurant').length, 3);
    //assert.equal(find('li:last').text(), 'New restaurant - See Reviews');
  });
});

test('visiting /locations/3/4/33 shows correct # reviews', function(assert) {
  visit('/locations/3/4/33');

  andThen(function() {
	assert.equal(find('.review').length, 3);
    //assert.equal(find('li:last').text(), 'New restaurant - See Reviews');
  });
});