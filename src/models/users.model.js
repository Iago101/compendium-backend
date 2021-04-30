// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'users';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: {type: String, required: true},
    title: {type: String},
    email: {type: String, required: true},
    gamesId: [{ type: Schema.Types.ObjectId, ref: 'games' }],
    roles: {type: String},
    gameRole: {type: String},
    password: {type: String, required: true},
    foldersId: {type: String},
    socialMediaKeys: {type: String},
    title: {type: String},
    profileText: {type: String},
    city: {type: String},
    guildId: { type: String, ref: 'guilds' }
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
  required: ['email', 'password'],
  properties: {
    strategy:{
      type: 'string',
      enum: [
        'local'
      ],
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string', 
    },
    
  }
};

module.exports.updateValidationSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    strategy:{
      type: 'string',
      enum: [
        'local'
      ],
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string', 
    },
    
  }
};
