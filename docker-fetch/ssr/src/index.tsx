
import express from 'express';
import fetch from 'node-fetch';
import { App, ReactHelmet, UseAsyncSsr, ReactDOM, ReactRouterDOM, ReactHttpStatusCode } from '../../client/src/App';
import { Html } from './components/Html';

const PORT = process.env.NODE_ENV === 'development' ? 3002 : 80;

const { Helmet } = ReactHelmet;
const { AsyncManager, AsyncProvider } = UseAsyncSsr;
const { StaticRouter } = ReactRouterDOM;
const { StatusCode } = ReactHttpStatusCode;

(globalThis as any).fetch = fetch;

const app = express();

app.get('/render', async (req, res) => {
    const path = req.query.path;

    const asyncManager = new AsyncManager();

    const Tree = (
        <AsyncProvider asyncManager={asyncManager}>
            <StaticRouter location={path}>
                <App/>
            </StaticRouter>
        </AsyncProvider>
    );

    // Scan tree
    ReactDOM.renderToString(Tree);
    Helmet.renderStatic();
    StatusCode.rewind();

    // Load async requests
    const caches = await asyncManager.load();

    // Filled content
    const content = ReactDOM.renderToString(Tree);
    const helmet = Helmet.renderStatic();
    const status = StatusCode.rewind() ?? 200;

    const html = <Html content={content} helmet={helmet} caches={caches}/>;

    res.status(status);
    res.send(`<!doctype html>\n${ReactDOM.renderToString(html)}`);
    res.end();
});

app.listen(PORT);

export {};