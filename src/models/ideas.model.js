// idea-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'ideas';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const citySchema = new Schema({
    population: { type: Number},
    description: { type: String, required: true },
    relevantPlaces: { type: String, required: true },
  });
  const characterSchema = new Schema({
    record: {type: String, required: true}, // subdocumento
    system: { type: String },
  });
  const itemSchema = new Schema({
    damage: { type: String},
    charges: {type: String},
    origin: {type: String},
    utilization: { type: String}, //required?
    rules: { type: String},
  });

  const tagSchema = new Schema({
    tagId: { type: Schema.Types.ObjectId, ref: 'tags'}, 
    name:{ type: String, required: true },
  });

  const schema = new Schema({
    title: { type: String, required: true },
    foldersId: { type: Schema.Types.ObjectId, ref: 'folders'}, // multi pastas, cópias? ou referencias da original, pastas guardam o id
    tags: [{type: tagSchema}],//string array
    image: { type: String }, 
    privacy: {type: String},
    description: { type: String },
    style: {type: Number},
    userId: { type: Schema.Types.ObjectId, ref: 'users'},
    creationPoints: {type: Number},
    comments: {type: String},
    link: {type: String},
    city: citySchema,
    character: characterSchema,
    item: itemSchema
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
  required: ['title'],
  properties: {
    strategy:{
      type: 'string',
      enum: [
        'local'
      ],
    },

    tags: {
      type: 'array',
      items: {
        type: 'object',
        required: ['name', 'tagId'],
        properties: {
          name: {
            type: 'string'
          },
          tagId: {
            type: ['object', 'string']
          }
        }
      }
    },

    privacy: {
      type: 'string',
      enum: [
        'guild',
        'private',
        'public',
      ]
    },

    title: {
      type: 'string',
    },
  }
};

module.exports.updateValidationSchema = {
  type: 'object',
  required: ['title'],
  properties: {
    strategy:{
      type: 'string',
      enum: [
        'local'
      ],
    },

    tags: {
      type: 'array',
      items: {
        type: 'object',
        required: ['name', 'tagId'],
        properties: {
          name: {
            type: 'string'
          },
          tagId: {
            type: ['object', 'string']
          }
        }
      }
    },

    privacy: {
      type: 'string',
      enum: [
        'guild',
        'private',
        'public',
      ]
    },

    title: {
      type: 'string',
    },
  }
};
