import express from "express";
import fs from 'fs'
import path from 'path'
import React from "react";
import { renderToString } from 'react-dom/server';
import App from '../src/App';


const PORT = 4000;
const app = express();

// Comment: Development way (dont work)
// app.use(express.static('./build', {index: false}));

// app.get('/', (req, res) => {
//     // try {
//         const reactApp = renderToString(
//             <App />
//             //<h2>Teste 12334</h2>
//         );

//         return res.send(
//             `
//             <html>
//                 <body>
//                     <div id="root">${reactApp}</div>
//                 </body>
//             </html>
//             `
//         );
//     // } catch (error) {
//     //     console.error(error);
//     //     return res.status(500).send('Internal Server Error');
//     // }
// });

app.use('^/$', (req, res, next) => {
    try {
        fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
            if(err){
                console.log(err)
                return res.status(500).send("Some error happened")
            }
            return res.send(
                data.replace(
                    '<div id="root"></div>', 
                    `<div id="root">${renderToString(ReactDOMServer.renderToString(<App/>))}</div>`)
            )
        })

    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});