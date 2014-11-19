import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('app');
  },

  actions: {
    createApp: function() {
      var app = this.store.createRecord('app', {
        isEditing: true
      });

      app.save();
    }
  }

});