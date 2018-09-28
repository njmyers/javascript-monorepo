module.exports = (env) =>
  `{
  "name": "${env.name}",
  "version": "0.0.1",
  "description": "${env.description}",
  "homepage": "https://component-library.netlify.com/",
  "repository": "https://github.com/njmyers/javascript-monorepo.git",
  "author": "Nick Myers <nickmyers111@gmail.com>",
  "main": "build/components.cjs.js",
  "module": "build/components.esm.js",
  "scripts": {
    "build": "run-s rollup",
    "prepublishOnly": "yarn run build",
    "rollup": "BABEL_ENV=production rollup -c",
    "test": "jest --watchAll"
  },
  "dependencies": {},
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "jest": "^23.1.0",
    "npm-run-all": "^4.1.3",
    "rollup": "^0.63.0"
  },
  "peerDependencies": {},
  "licence": "ISC"
}
`;
