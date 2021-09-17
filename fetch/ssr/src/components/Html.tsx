import { ReactHelmet } from "../../../client/src/App";

export function Html({ content, helmet }: { content: string, helmet: ReactHelmet.HelmetData }) {
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
        <html {...htmlAttrs as any}>
            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
            </head>
            <body {...bodyAttrs as any}>
                <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
                <script src="/index.js"></script>
            </body>
        </html>
    );
  }