import { Helmet } from "react-helmet";
import { useAsync } from "useasync-ssr";

function getCount() {
    return fetch(API_URI + '/count2').then(response => response.text()).then(v => parseInt(v));
}

export const Count2 = () => {
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