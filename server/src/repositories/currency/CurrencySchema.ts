import { Schema } from "mongoose";

export default class CurrencySchema extends Schema {
    constructor(options: any, collections: any) {
        const schema = {
            ...options,
            createdAt: {
              type: Date,
              required: true,
              default: Date.now
            },
            deletedAt: {
              type: Date,
              default: null
            },
            currency: {
              type: String
            },
          };
    
        super(schema, collections);
      }
}
