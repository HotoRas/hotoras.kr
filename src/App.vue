<script setup lang="ts">
import 'sarasa-mono-web/index.css';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

import './components/HeaderComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue';
</script>
<template>
  <HeaderComponent />
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <span class="source">test</span><br>
  <p class="source">hellorld</p>
  <div>
    <code>name</code>=<code>hotoras</code>
  </div>
  <div class="wrapper brownfox-wrapper">
    <p class="brownfox brownfox-eng">
      The quick brown fox jumps over the lazy dog.
      <span class="number">0123456789</span>
      <span class="contexts">()[]{}&lt;&gt;.,?`~!@#1%^&*-_=+|'";:</span>
    </p>
    <p class="brownfox brownfox-kor">
      다람쥐 헌 쳇바퀴에 타고파.
      <span class="glyph">
        ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅐㅔㅒㅖ
      </span>
    </p>
    <p class="brownfox brownfox-eng-code source">
      The quick brown fox jumps over the lazy dog. 0123456789 {}[]()lI|&lt;&gt;.,/?'";:`~!@#$%^&*()-_=+
    </p>
    <p class="brownfox brownfox-ko-code source">
      다람쥐 헌 쳇바퀴에 타고파. ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅐㅔㅒㅖ
    </p>
  </div>
</template>

<style>
:root {
  /* Color settings should support dark mode */
  --background: white #333333;
  --text: black #e7e7e7;
  --accent: #ff5252 #ffacac;

  /* Font settings */
  --font-main: 'Pretendard Variable', sans-serif;
  /* compose monospace */
  --font-monospace: 'SarasaMonoCL-Regular', monospace;
}

h1,h2,h3 {
  font-family: var(--font-main);
  font-weight: 700;
}
h4,h5,h6 {
  font-family: var(--font-main);
  font-weight: 500;
}
body {
  font-family: var(--font-main);
  font-weight: 400;
}
.source, code {
  font-family: var(--font-monospace);
  font-weight: 400;
}
</style>

<style scoped></style>
