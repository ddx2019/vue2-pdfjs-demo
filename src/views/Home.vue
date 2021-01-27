<template>
  <div class="home">
    <nav class="header">
      <router-link to="/previewPDF1">
        npm install方式使用pdf.js预览pdf
      </router-link>
      <router-link to="/previewPDF2">
        静态方式引入pdf.js;
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style>
.header {
  background: #1890ff;
  height: 50px;
  line-height: 50px;
}
.header a {
  margin-right: 20px;
  font-size: 20px;
  padding: 10px;
  color: #fff;
}
</style>
