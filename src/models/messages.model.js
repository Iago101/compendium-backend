// chats-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'messages';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users'},
    text: {type: String},
    receiverId: { type: Schema.Types.ObjectId, ref: 'users', nullable: null},
    guildId:  { type: Schema.Types.ObjectId, ref: 'guilds', nullable: null}
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};

module.exports.createValidationSchema = {
  type: 'object',
  required: ['text'],
  properties: {
    userId:{
      type: ['object','string']
    },

    text: {
      type: 'string',
    },

    receiverId:{
      type: ['object','string']
    },

    guildId:{
      type: ['object','string']
    },
  }
};
