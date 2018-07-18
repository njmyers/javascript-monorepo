import AWS from 'aws-sdk';
import Promise from 'bluebird';

AWS.config.setPromisesDependency(Promise);

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

const S3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
  region,
  apiVersion: '2006-03-01',
});

export default S3;
