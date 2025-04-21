import mongoose from 'mongoose';
import { config } from './common/configs/env.config';
import app from './app';

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.mongoose.uri, config.mongoose.options);
    console.log('Connected to MongoDB');

    // Start HTTP server
    app.listen(config.rest.port, () => {
      console.log(`HTTP Server running at port ${config.rest.port}`);
    });

  } catch (error) {
    console.error('Server startup failed:', error);
    process.exit(1);
  }
}

main();

process.on('SIGINT', () => {
  console.log('Server shutting down');
  process.exit(1);
});
