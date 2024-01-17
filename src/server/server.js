import express from "express";
import fs from 'fs';
import path from 'path';
import React from "react";
import { renderToString } from 'react-dom/server';
import App from '../App';
import serverless from 'serverless-http';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '..', 'build', 'static')));

app.use('/*', (req, res) => {
    try {
        console.log('Reading index.html file:', path.resolve(__dirname, '..', 'build', 'index.html'));
        fs.readFile(path.resolve(__dirname, '..', 'build', 'index.html'), 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Some error happened");
            }

            const appHtml = renderToString(<App/>);

            const htmlOutput = data.replace(
                '<div id="root"></div>',
                `<div id="root">${appHtml}</div>
                <script defer="defer" src="/static/js/main.js"></script>`
            );

            console.log('Contents of index.html:', data);
            console.log('Rendered HTML App:', renderToString(<App/>));

            return res.send(htmlOutput);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

// Export the Express app wrapped with serverless-http
module.exports.handler = serverless(app);
