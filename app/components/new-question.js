import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

  save1() {
    var params = {
      author: this.get('author') === undefined ? "undefined" : this.get('author'),
      ask: this.get('ask') === undefined ? "undefined" : this.get('ask'),
    };
    this.set('addNewQuestion', false);
    this.sendAction('save2', params);
  }
  }
});
