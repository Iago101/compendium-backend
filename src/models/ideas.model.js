// idea-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'ideas';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const localSchema = new Schema({
    population: { type: String},
    hasDesc: {type: Boolean},
    description: { type: String },
    hasRelevantPlaces: {type: Boolean},
    relevantPlaces: { type: String},
    hasEconomy: {type: Boolean},
    economy: { type: String},
    hasHierarchy: {type: Boolean},
    hierarchy: { type: String},
    hasDefenses: {type: Boolean},
    defenses: { type: String},
  });
  const characterSchema = new Schema({
    record: {type: Object}, // subdocumento
    system: { type: String },
  });
  const itemSchema = new Schema({
    doesDamage: {type: Boolean},
    damage: { type: String},
    hasCharges: {type: Boolean},
    charges: {type: String},
    perWhen: {type: String},
    hasOrigin: {type: Boolean},
    origin: {type: String},
    hasUtilization: {type: Boolean},
    utilization: { type: String},
    hasRules: {type: Boolean},
    rules: { type: String},
  });

  const tagSchema = new Schema({
    tagId: { type: Schema.Types.ObjectId, ref: 'tags'}, 
    name:{ type: String, required: true },
  });

  const schema = new Schema({
    title: { type: String, required: true },
    tags: [{type: tagSchema}],
    image: { type: String }, 
    privacy: {type: String},
    description: { type: String },
    type: {type: String},
    userId: { type: Schema.Types.ObjectId, ref: 'users'},
    creationPoints: {type: Number},
    commentsCount: {type:Number, default: 0},
    link: {type: String},
    local: localSchema,
    character: characterSchema,
    item: itemSchema,
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
