
import { Route, Switch } from 'react-router';
import { AsyncProvider } from 'useasync-ssr';
import { Count1 } from './pages/Count1';
import { Count2 } from './pages/Count2';
import { Error404 } from './pages/Error404';
import { Index } from './pages/Index';

export const App = () => (
    <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/count1" exact component={Count1}/>
        <Route path="/count2" exact component={Count2}/>
        <Route path="*" exact component={Error404}/>
    </Switch>
);


export * as ReactHelmet from 'react-helmet';
export * as UseAsyncSsr from 'useasync-ssr';
export * as ReactDOM from 'react-dom/server';
export * as ReactRouterDOM from 'react-router-dom';
export * as ReactHttpStatusCode from 'react-http-status-code';