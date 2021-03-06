import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('character', params.character_id);
    },
    actions: {
        remove(character) {
            character.destroyRecord()
                .then(() => {
                    this.transitionTo('characters');
                })
        }
    }
});
