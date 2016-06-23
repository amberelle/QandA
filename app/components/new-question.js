import Ember from 'ember';
// import moment from 'moment';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },


//
// calls this action in new-question template when save button is pressed.  then it gets the author and ask input and stores it in params

  save1() {
    var params = {
      author: this.get('author') === undefined ? "undefined" : this.get('author'),
      ask: this.get('ask') === undefined ? "undefined" : this.get('ask'),
      timestamp: moment().format()
    };
    this.set('addNewQuestion', false);
    this.sendAction('save2', params);
  }
  }
});
