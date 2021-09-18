
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AsyncManager, AsyncProvider } from 'useasync-ssr';
import { App } from './App';

const root = document.getElementById('root');

const asyncManager = new AsyncManager(true);

ReactDOM.hydrate(
    <AsyncProvider asyncManager={asyncManager} caches={(window as any)['__USEASYNC_SSR_CACHES__']}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AsyncProvider>
, root);