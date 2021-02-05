//const fs = require('fs').promises; //older import syntax for promise supporting fs
import fs from 'fs/promises'; //importing the promise supporting fs in ES module syntax
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); //constructing a path to current file
const __dirname = dirname(__filename); //getting back the _dirname by passing the filename

export const resHandler = async (req, res, next) => {
    try {
        const htmlFileContent = await fs.readFile('demo.html', 'utf-8'); //fs now returns a promise instead of taking in a callback
        res.send(htmlFileContent);
    } catch (err) {
        console.log(err);
    }
    //res.sendFile(__dirname + 'demo.html'); //this does not work in ES Module syntax as __dirname is not recognized
    //res.sendFile(path.join(__dirname, 'demo.html'));
};