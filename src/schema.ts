import { Schema } from 'schema-utils/declarations/validate';

const schema: Schema = {
  title: 'PackgaeJsonPluginOptions',
  type: 'object',
  additionalProperties: false,
  properties: {
    include: {
      description: 'Values only to keep from a package.json file',
      type: 'array',
      minItems: 1,
      items: {
        anyOf: [
          {
            type: 'string',
            minLength: 1,
          },
        ],
      },
    },
    rootDir: {
      description: 'Directory to look for a package.json file',
      type: 'string',
      minLength: 1,
    },
    normalize: {
      description: 'Normalize package.json with normalize-package module',
      type: 'boolean',
    },
    key: {
      description: 'Name of key to which package.json values are mapped to',
      type: 'string',
      minLength: 1,
    },
  },
};

export default schema;
