// game-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'games';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const tagSchema = new Schema({
    tagId: { type: Schema.Types.ObjectId, ref: 'tags'}, 
    name:{ type: String, required: true },
  });

  const schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users'},//required
    tags: [{type: tagSchema}],
    title: { type: String, required: true },
    description: {type: String},
    members: { type: String},
    link: { type: String}
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
  required: ['title', 'tags'],
  properties: {
    strategy:{
      type: 'string',
      enum: [
        'local'
      ],
    },
    title: {
      type: 'string',
    },
    tags:{
      name: {
        type: 'string',
      },
      value: {
        type: 'number'
      }
    }
    
  }
};

module.exports.updateValidationSchema = {
  type: 'object',
  required: ['title', 'tags'],
  properties: {
    strategy:{
      type: 'string',
      enum: [
        'local'
      ],
    },
    title: {
      type: 'string',
    },
    tags:{
      name: {
        type: 'string',
      },
      value: {
        type: 'number'
      }
    }
    
  }
};

