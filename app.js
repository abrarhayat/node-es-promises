import express from 'express';

import { resHandler } from './resHandler.js';

const app = express();

app.get('/', resHandler);

app.listen(3000, () => {
    console.log('App Started.')
});