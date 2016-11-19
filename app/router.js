import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('characters', function() {
    this.route('new');
    this.route('character', {path: ':character_id'});
  });
});

export default Router;
