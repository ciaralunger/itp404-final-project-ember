import { test } from 'qunit';
import moduleForAcceptance from 'final/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view meals');

test('visiting /locations/1 shows a list of meal options', function(assert) {
  visit('/locations/1');

  andThen(function() {
    assert.equal(find('.meal').length, 6);
  });
});

