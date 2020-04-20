
/**
 * Send error to S3 bucket /logs
 */
async function uploadErrorToS3(error) {
    const AWS = require('aws-sdk');
    const s3 = new AWS.S3({
        accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY,
        secretAccessKey: process.env.VUE_APP_S3_SECRET_KEY,
        region: 'us-east-2'
    });

    const timestamp = Date.now().toString();

    const params = {
        Bucket:process.env.VUE_APP_S3_BUCKET,
        Key: `logs/error/${timestamp}`,  // This is where the file is saved to the bucket.
        Body: JSON.stringify(error),
        ContentType: 'application/json; charset=utf-8',
        ACL: 'public-read',
    };
    await s3.upload(params, function (err, data) {
        if (err) { err }
        else { data }
    });
};

/**
 * Wrapper function to avoid massive refactoring if S3 function changes.
 */
async function logError(error) {
    await uploadErrorToS3(error);
};

export default logError;
