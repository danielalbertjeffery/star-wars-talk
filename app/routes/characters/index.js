import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {};
    },
    actions: {
        save(character) {
            let newCharacter = this.store.createRecord('character', character);
            newCharacter.save().then((newCharacter) => {
                console.log("Saved character ", newCharacter.name);
                this.transitionTo('characters.character', newCharacter);
            });
            this.set('character', {});

        }
    }
});
