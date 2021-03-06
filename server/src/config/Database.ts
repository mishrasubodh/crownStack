import * as mongoose from 'mongoose';
export interface IDatabaseConfig {
  mongoUrl: string;
}

// plugin bluebird promise in mongoose
// mongoose.Promise = Promise;
export default class Database {
  public static open({ mongoUrl }: IDatabaseConfig) {
    return new Promise<void>((resolve, reject) => {
      // Mongoose options
      const options = {
        autoIndex: true, // Build indexes
        bufferMaxEntries: 0,
        // keepAlive: 1,
        poolSize: 10, // Maintain up to 10 socket connections
        reconnectInterval: 500, // Reconnect every 500ms
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        useNewUrlParser: true
      };

      mongoose.connect(mongoUrl, options);

      mongoose.connection.on('error', err => {
        reject(err);
      });

      mongoose.connection.on('connected', err => {
        resolve();
      });

    });
  }

  public static close() {
    mongoose.disconnect();
  }
}
