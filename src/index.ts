import express from 'express';
import mongoose from 'mongoose';

import { router } from './routes';
import path from 'path';

mongoose.connect('mongodb://localhost/27017')
  .then(() => {
    const app = express();
    const port = 3001;

    app.use('/upload', express.static(path.resolve(__dirname, '..', 'upload')));

    app.use(express.json());
    app.use(router);
    app.listen(port, () => {
      console.log('👻 Server working 👻');
    });
  })
  .catch((err) => console.error(err));


