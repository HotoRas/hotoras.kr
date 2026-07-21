<script setup lang="ts">
import { onMounted } from 'vue';
import 'sarasa-mono-web/index.css';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

import HeaderComponent from '~/src/components/HeaderComponent.vue';
import FooterComponent from '~/src/components/FooterComponent.vue';

onMounted(() => {
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
});
</script>

<template>
  <HeaderComponent />
  <div id="content-view">
    <NuxtPage />
  </div>
  <FooterComponent />
</template>

<style>
:root {
  --background: light-dark(white, #333333);
  --text: light-dark(black, #e7e7e7);
  --accent: light-dark(#ffb6b6, #b45252);
  --font-main: 'Pretendard Variable', sans-serif;
  --font-monospace: 'SarasaMonoCL-Regular', monospace;
  --header-height: 4em;
}

#app {
  width: 1120px;
  min-width: 640px;
  flex-direction: column;
  align-items: center;
}

#content-view {
  max-width: calc(100vw - 40px);
  flex-wrap: wrap;
  text-wrap: wrap !important;
  display: block;
  position: inherit;
  left: 0;
  right: 0;
  background: var(--background);
  color: var(--text);
  margin-left: 20px;
  margin-right: 20px;
  margin-top: calc(var(--header-height) + 10px);
  margin-bottom: 50px;
}

@media (max-width: 1100px) {
  #content-view {
    width: initial;
  }
}

nav {
  background-color: #ffd4d4;
}

h1,
h2,
h3 {
  font-family: var(--font-main);
  font-weight: 700;
}

h4,
h5,
h6 {
  font-family: var(--font-main);
  font-weight: 500;
}

body {
  font-family: var(--font-main);
  font-weight: 400;
}

.source,
code {
  font-family: var(--font-monospace);
  font-weight: 400;
}
</style>
