<template>
  <div>
    <div class="m-auto card">
      <div class="p-auto card-body">
        <h1>File Downloader</h1>
        <file-search :fileList="fileList" :linkExpiresInSeconds="0"></file-search>
      </div>
    </div>
  </div>
</template>
<script>
import FileSearch from "../components/FileSearch/FileSearch";
import AWS from "aws-sdk";
import logError from "../logging";

const s3 = new AWS.S3({
  accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY,
  secretAccessKey: process.env.VUE_APP_S3_SECRET_KEY,
  region: process.env.VUE_APP_S3_REGION
});
const params = {
  Bucket: process.env.VUE_APP_S3_BUCKET
};

export default {
  name: "file-downloader",
  components: { FileSearch },
  methods: {
    async getFileList(key) {
      if (key) {
        params.StartAfter = key;
      }
      await s3.listObjectsV2(params, async (err, data) => {
        if (err) {
          await logError(err);
        } else {
          this.fileList = data.Contents.filter(file => file.Size > 0);
        }
      });
    }
  },
  data() {
    return {
      fileList: null
    };
  },
  async created() {
    await this.getFileList('files');
  }
};
</script>
