import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },


// this action identifies new answer object and the question it belongs to. then in the variable we add the new answer to the answer attribute of the question using .addObject method.  then save the new answer and only save question after new answer has been saved.



  actions:{
    save3(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
