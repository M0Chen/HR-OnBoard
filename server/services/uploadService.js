const aws = require("aws-sdk");

const BUCKET_NAME = process.env.BUCKET_NAME;
const BUCKET_ACCESS_KEY = process.env.BUCKET_ACCESS_KEY;
const BUCKET_SECRET_ACCESS_KEY = process.env.BUCKET_SECRET_ACCESS_KEY;

aws.config.update({
  accessKeyId: BUCKET_ACCESS_KEY,
  secretAccessKey: BUCKET_SECRET_ACCESS_KEY,
});

const s3 = new aws.S3();

async function uploadToS3(file) {
  console.log("file", file);
  const params = {
    Bucket: BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
  };


  await s3.upload(params, (error, data) => {
    if (error) {
      return error;
    } else {
      return data;
    }
  });
}

module.exports = { uploadToS3 };