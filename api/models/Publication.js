/**
 * Publication.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    publicationType:{
      model:'PublicationType'
    },
    name:{
      type:'string',
      required: true
    },
    description:{
      type:'text',
    },
    content:{
      type:'text',
      required: true,
      defaultsTo: '<h1>Default title</h1>'
    },
    user:{
      model:'user'
    }

  }
};

