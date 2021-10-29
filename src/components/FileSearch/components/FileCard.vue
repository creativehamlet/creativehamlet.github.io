<template>
  <div class="fileCard card m-3">
    <a :href="url" :download="file.Key">
      <div class="row">
        <div class="col-3 p-3">
          <i class="ni ni-single-copy-04"></i>
        </div>

        <div class="col-9 mx-auto py-3">
          <div class="row fileTitle card-title">
            <b>{{ file.Key.replace('files', '').split('/').join(' ') }}</b>
          </div>
          <i class="ni ni-cloud-download-95"></i>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import AWS from 'aws-sdk';
import logError from '../../../logging';

const s3 = new AWS.S3({
  accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY,
  secretAccessKey: process.env.VUE_APP_S3_SECRET_KEY,
  region: process.env.VUE_APP_S3_REGION,
});
const params = {
  bucket: process.env.VUE_APP_S3_BUCKET,
};

export default {
  name: 'file-card',
  props: ['file', 'linkExpiresInSeconds'],
  data() {
    return {
      url: '',
    };
  },
  created() {
    this.url = s3.getSignedUrl('getObject', {
      Bucket: process.env.VUE_APP_S3_BUCKET,
      Key: this.file.Key,
      Expires: this.linkExpiresInSeconds,
    });
  },
};
</script>
<style lang="sass" scoped>
  .ni-single-copy-04 { font-size: 4rem }
  .ni-cloud-download-95 { font-size: 3rem }
</style>

