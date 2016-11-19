import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord(params.character_id);
    },
    actions: {
        remove(character) {
            character.destroyRecord()
                .then(() => {
                    this.transitionTo('characters');
                });
        }
    }
});
