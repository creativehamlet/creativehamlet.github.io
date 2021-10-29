<template>
  <section>
    <searchbar
      class="row d-flex justify-content-center"
      v-model="searchText"
    ></searchbar>
    <div v-if="files" class="row d-flex justify-content-center">
      <file-card
        class="col-3"
        v-for="(file, index) in files"
        :file="file"
        :key="`${file.Key}${index}`"
        :linkExpiresInSeconds="linkExpiresInSeconds"
      ></file-card>
    </div>
  </section>
</template>
<script>
import FileCard from "./components/FileCard";
import Searchbar from "./components/Searchbar";

export default {
  name: "file-search",
  components: { FileCard, Searchbar },
  props: ["fileList", "linkExpiresInSeconds"],
  computed: {
    files() {
      return this.fileList
        ? this.fileList.filter((file) =>
            file.Key.toLowerCase().includes(this.searchText.toLowerCase())
          )
        : null;
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
};
</script>
