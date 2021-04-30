// guild-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'guilds';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const GuildRole = new Schema({
    roleName: { type: String, required: true},
    permissions: {type: String},
    userId: {type: String},
  });

  const schema = new Schema({
    name: { type: String, required: true},
    userId: { type: Schema.Types.ObjectId, ref: 'users'}, //GM aqui
    icon: { type: String, required: true}, 
    members: {type: String},
    style: { type: String}, 
    warning: { type: String},
    guildRole: GuildRole,

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
  required: ['name', 'icon', 'guildRole'],
  properties: {
    strategy:{
      type: 'string',
      enum: [
        'local'
      ],
    },
    name: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
    guildRole: {
      roleName:{
        type: 'string',
      }
    },
    
  }
};

module.exports.updateValidationSchema = {
  type: 'object',
  required: ['name', 'icon', 'guildRole'],
  properties: {
    strategy:{
      type: 'string',
      enum: [
        'local'
      ],
    },
    name: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
    guildRole: {
      roleName:{
        type: 'string',
      }
    },
    
  }
};
