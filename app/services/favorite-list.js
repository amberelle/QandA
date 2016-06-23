import Ember from 'ember';

export default Ember.Service.extend({
  likes:[],
  add(like) {
    this.get('likes').pushObject(like);
  }
});
