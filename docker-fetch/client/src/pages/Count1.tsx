import { Helmet } from "react-helmet";
import { useAsync } from "useasync-ssr";

function getCount() {
    return fetch(API_URI + '/count1').then(response => response.text()).then(v => parseInt(v));
}

export const Count1 = () => {
    const count = useAsync(() => {
        return getCount()
    }, [], true);

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