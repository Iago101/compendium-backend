// folders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'folders';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const tagSchema = new Schema({
    tagId: { type: Schema.Types.ObjectId, ref: 'tags'}, 
    name:{ type: String, required: true },
  });

  const schema = new Schema({
    name: { type: String, required: true },
    tags: [{type: tagSchema}], //object ou strin
    userId: {type: Schema.Types.ObjectId, ref: 'users'}, //required
    ideiasId: [{type: Schema.Types.ObjectId, ref: 'ideas'}],
    gameId: {type: Schema.Types.ObjectId, ref: 'games'},
    privacy: {type: String},
    type: { type: String},
    description: { type: String},
    guildId: { type: Schema.Types.ObjectId, ref: 'guilds'},
    style: { type: Number},
    warning: { type: String}
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
  required: ['name'],
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

    privacy: {
      type: 'string',
      enum: [
        'guild',
        'private',
        'public'
      ]
    },
  }
};

module.exports.updateValidationSchema = {
  type: 'object',
  required: [],
  properties: {
    strategy:{
      type: 'string',
      enum: [
        'local'
      ],
    },
  }
};