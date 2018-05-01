/**
 * This function generates a template of an HTML page. Pass in your body from a react or other renderToString function for server side rendering.
 * @param {string} title HTML Page title
 * @param {string} body HTML string of content. This will be a pre-rendered string from react
 */
const template = ({ title, body } = {}) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${title}</title>
</head>

<style>
    body {
        margin: 0;
        font-family: monospace
    }
</style>

<body>
    <div id="root">${body}</div>
    <script type="text/javascript" src="/build/bundle.js"></script>
</body>
</html>`;

export default template;
