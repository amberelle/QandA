
import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    ask: DS.attr(),
    answers: DS.hasMany('answer', { async: true }),
    timestamp: DS.attr()

});
