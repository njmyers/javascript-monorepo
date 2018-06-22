require('dotenv').config();
const fs = require('fs');
const path = require('path');

const manifestBuildPath = path.join(process.cwd(), 'build', 'manifest.json');

const built = require(manifestBuildPath);

const name = process.env.REACT_APP_SITE_SUBTITLE
  ? `${process.env.REACT_APP_SITE_TITLE}: ${
      process.env.REACT_APP_SITE_SUBTITLE
    }`
  : process.env.REACT_APP_SITE_TITLE;

const merge = {
  name: `${process.env.REACT_APP_SITE_TITLE}: ${
    process.env.REACT_APP_SITE_SUBTITLE
  }`,
  short_name: process.env.REACT_APP_SITE_TITLE,
  description: process.env.REACT_APP_SITE_DESCRIPTION,
  orientation: process.env.REACT_APP_ORIENTATION,
};

const manifest = Object.assign({}, built, merge);

fs.writeFileSync(manifestBuildPath, JSON.stringify(manifest, null, 2));
