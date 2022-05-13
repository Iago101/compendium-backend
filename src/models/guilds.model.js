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
    name: { type: String, required: true, unique: true},
    userId: { type: Schema.Types.ObjectId, ref: 'users'}, //GM aqui
    icon: { type: String}, 
    members: [{ type: Schema.Types.ObjectId, ref: 'users'}],
    about: {type: String},
    style: { type: String}, 
    warning: { type: String},
    guildRole: GuildRole,
    reported: {type: Boolean}

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
  required: ['name', 'about'],
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
    about: {
      type: 'string',
    },
  }
};

module.exports.updateValidationSchema = {
  type: 'object',
  required: ['name', 'about'],
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
    about: {
      type: 'string',
    },
  }
};
