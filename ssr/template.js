const template = ({ title, body } = {}) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${title}</title>
</head>
<body>
    <div id="root">
        ${body}
    </div>
    <script type="text/javascript" src="/build/bundle.js"></script>
</body>
</html>`;

export default template;
