import Ember from 'ember';

// var questions = [{
//   id:1,
//   author: "Billy Joel",
//   ask: "What's an uptown girl?"
// }, {
//   id:2,
//   author: "Rex",
//   ask: "why is the sky blue?"
// }];


export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions:{
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
