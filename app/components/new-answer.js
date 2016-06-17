import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer1() {
      var params = {
        author: this.get('author') === undefined ? "undefined" : this.get('author'),
        response: this.get('response') === undefined ? "undefined" : this.get('response'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
    }
    }
});
