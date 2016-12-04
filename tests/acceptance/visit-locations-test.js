import { test } from 'qunit';
import moduleForAcceptance from 'final/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | visit locations');

test('visiting /locations', function(assert) {
  visit('/locations');

  andThen(function() {
    assert.equal(currentURL(), '/locations');
  });
});
