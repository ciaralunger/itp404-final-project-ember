import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('locations', function() {
    this.route('meals', { path: ':li' }, function() {
      this.route('restaurants', { path: ':mi' }, function() {
        this.route('reviews', { path: ':ri' });
      });
    });
  });
});

export default Router;
