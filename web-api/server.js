/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const router = require('./router');
const errorsHandler = require('./errorsHandler');

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = express();

  app.use(cors());
  app.use(router);
  app.use(errorsHandler);

  app.listen(3001, () => console.log(`Server listening on port 3001 - Process: ${process.pid}!`));
}
