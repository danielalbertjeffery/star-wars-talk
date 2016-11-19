import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        remove(character) {
            character.destroyRecord()
                .then(() => {
                    this.transitionTo('characters');
                });

        }
    }
});
