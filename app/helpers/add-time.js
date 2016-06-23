import Ember from 'ember';
// import moment from 'moment';

export function myMoment(param) {
  var timestamp = param.toString();
 return moment(timestamp).format("MMMM Do , h:mm a");

}

export default Ember.Helper.helper(myMoment);
