import Ember from 'ember';

export default Ember.Component.extend({

  // questionDateCompute: Ember.computed(function() {
  //   return moment(this.get('question.timestamp')).format("MMMM Do, h:mm a") + ': '+ this.get('question.ask');
  // }),
  authorDateCompute: Ember.computed(function() {
    return 'on' + moment(this.get('question.timestamp')).format("MMMM Do, h:mm a") + ', '+ this.get('question.author') + ' asked:';
  }),

});
