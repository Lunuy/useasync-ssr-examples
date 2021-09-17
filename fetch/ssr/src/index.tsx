
import express from 'express';
import fetch from 'node-fetch';
import { App, ReactHelmet, UseAsyncSsr, ReactDOM } from '../../client/src/App';
import { Html } from './components/Html';

const { Helmet } = ReactHelmet;
const { AsyncManager, AsyncProvider } = UseAsyncSsr;

(globalThis as any).fetch = fetch;

const app = express();

app.get('/render', async (req, res) => {
    const asyncManager = new AsyncManager();

    const Tree = (
        <AsyncProvider asyncManager={asyncManager}>
            <App/>
        </AsyncProvider>
    );

    // Scan tree
    ReactDOM.renderToString(Tree);
    Helmet.renderStatic();

    // Load async requests
    await asyncManager.load();

    // Filled content
    const content = ReactDOM.renderToString(Tree);
    const helmet = Helmet.renderStatic();

    const html = <Html content={content} helmet={helmet}/>;

    res.status(200);
    res.send(`<!doctype html>\n${ReactDOM.renderToString(html)}`);
    res.end();
});

app.listen(3002);

export {};