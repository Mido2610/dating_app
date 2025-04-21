import mongoose from 'mongoose';
import * as grpc from '@grpc/grpc-js';
import * as config from '../src/common/configs/env.config'
import server from './routes';

function main() {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(config.mongoose.uri, config.mongoose.options)
    .then(() => {
      console.log('Connected to MongoDB');

      server.bindAsync(
        `0.0.0.0:${config.port}`,
        grpc.ServerCredentials.createInsecure(),
        (error) => {
          if (error) {
            console.error(`process is running on this ${config.port}.`);
            console.error(error);
          } else {
            console.log(`Starting gRPC server on port: ${config.port}`);
          }
        }
      );
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
}

main();

process.on('SIGINT', () => {
  console.log(`Exit grpc server on port ${config.port}`);
  server.forceShutdown();
  process.exit(1);
});
