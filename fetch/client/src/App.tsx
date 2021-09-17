
import { Helmet } from 'react-helmet';
import { useAsync } from 'useasync-ssr';

function getCount() {
    return fetch('http://127.0.0.1:3001/count').then(response => response.text()).then(v => parseInt(v));
}

export const App = () => {
    const count = useAsync(() => getCount());

    return (
        <div>
            <Helmet>
                <title>{'Count ' + count.value}</title>
            </Helmet>
            <h1>Count</h1>
            <p>Count: {count.value}</p>
        </div>
    )
};


export * as ReactHelmet from 'react-helmet';
export * as UseAsyncSsr from 'useasync-ssr';
export * as ReactDOM from 'react-dom/server';