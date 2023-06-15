<script setup>
import ExampleSvg from '~/assets/images/example1.svg'

const imageName = 'example1'
const dynamicPathSvg = new URL(
  `./assets/images/${imageName}.svg`,
  import.meta.url
).href
</script>

<template>
  <div>
    <h2>img 要素の src に文字列パスを指定したとき</h2>
    <p>&lt;img src="~/assets/images/example1.svg" /&gt;</p>
    <img width="200" src="~/assets/images/example1.svg" />

    <h2>SVG ファイルを import したとき</h2>
    <p>
      import ExampleSvg from '~/assets/images/example1.svg'<br />
      <br />
      &lt;img :src="ExampleSvg" /&gt;
    </p>
    <img width="200" :src="ExampleSvg" />

    <h2>SVG ファイルを require したとき（静的）</h2>
    <p>
      const exampleSvgRequired = require('~/assets/images/example1.svg')
      <br />
      &lt;img :src="exampleSvgRequired" /&gt;
    </p>
    <!-- <img width="200" :src="exampleSvgRequired" /> -->
    <p>500 エラー</p>

    <h2>動的パスの SVG</h2>
    <p>
      const imageName = 'example1'<br />
      const dynamicPathSvg = new URL(`./assets/images/${imageName}.svg`,
      import.meta.url).href<br />
      <br />
      &lt;img :src="dynamicPathSvg" /&gt;
    </p>
    <p>dynamicPathSvg: {{ dynamicPathSvg }}</p>
    <img width="200" :src="dynamicPathSvg" />

    <h2>CSS の background-image の url に文字列パスを指定したとき</h2>
    <p>CSS）background-image: url("~/assets/images/example1.svg");</p>
    <div class="background-image"></div>

    <h2>style 属性で background-image の url を指定したとき</h2>
    <p>
      import ExampleSvg from '~/assets/images/example1.svg'<br />
      <br />
      &lt;div :style="`background-image: url(${ExampleSvg}});`"&gt;&lt;/div&gt;
    </p>
    <div
      :style="`width: 200px; height: 200px; background-image: url(${ExampleSvg});`"
    ></div>
  </div>
</template>

<style scoped>
.background-image {
  width: 200px;
  height: 200px;
  background-image: url('~/assets/images/example1.svg');
}
</style>
