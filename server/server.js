import express from "express";
import fs from 'fs'
import path from 'path'
import React from "react";
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const PORT = 4000;
const app = express();

// app.use('/static/css', express.static(path.resolve(__dirname, '..', 'build', 'static', 'css')));
app.use('/static', express.static(path.resolve(__dirname, '..', 'build', 'static')));  //<- LAST FAILURE

app.use('/*', (req, res, next) => {
    try {
        console.log('Reading index.html file:', path.resolve(__dirname, '..', 'build', 'index.html'));
        fs.readFile(path.resolve(__dirname, '..', 'build', 'index.html'), 'utf-8', (err, data) => {
            if(err){
                console.log(err)
                return res.status(500).send("Some error happened")
            }

            const appHtml = renderToString(<App/>);

            const htmlOutput = data.replace(
                '<div id="root"></div>', 
                `<div id="root">${appHtml}</div>
                <script defer="defer" src="/static/js/main.js"></script>`
            )

            console.log('Contents of index.html:', data);
            console.log('Rendered HTML App:', renderToString(<App/>));

            return res.send(htmlOutput)
        })

    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});