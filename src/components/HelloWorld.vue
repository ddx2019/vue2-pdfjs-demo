<template>
  <div class="test">
    <h1 v-if="status" type="danger" @click="previewPDF">
      点击，将在本页预览PDF
    </h1>
    <h1 v-if="!status" type="danger" @click="previewPDF2">
      点击，将新开一页预览PDF
    </h1>
    <iframe
      v-if="pdfFileUrl"
      :src="'pdfjs/web/viewer.html?file=' + pdfFileUrl"
      class="pdf-viewer"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pdfFileUrl: '',
      status: false
    };
  },
  methods: {
    previewPDF() {
      this.status = false;
      this.pdfFileUrl =
        'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';
    },
    previewPDF2() {
      this.status = true;
      let pdfFileUrl =
        'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';
      window.open(`pdfjs/web/viewer.html?file=${pdfFileUrl}`); // 新开一页，展示pdf文档
    }
  }
};
</script>
<style>
.pdf-viewer {
  height: 100vh;
  width: 100vw;
}
.test {
  overflow-x: hidden;
}
</style>
