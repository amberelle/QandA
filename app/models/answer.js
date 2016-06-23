
import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    response: DS.attr(),
    question: DS.belongsTo('question', { async: true }),
    timestamp: DS.attr()

});
