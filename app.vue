<script setup>
import ExampleSvg from '~/assets/images/example1.svg?url'

const imageName = 'example1'
const dynamicPathSvg = await import(`./assets/images/${imageName}.svg?component`)
</script>

<template>
  <div>
    <h2>img 要素の src に文字列パスを指定したとき</h2>
    <p>&lt;img src="~/assets/images/example1.svg?url" /&gt;</p>
    <img width="200" src="~/assets/images/example1.svg?url" />

    <h2>SVG ファイルを import したとき</h2>
    <p>
      import ExampleSvg from '~/assets/images/example1.svg?url'<br />
      <br />
      &lt;img :src="ExampleSvg" /&gt;
    </p>
    <img width="200" :src="ExampleSvg" />

    <h2>動的パスの SVG</h2>
    <p>
      const imageName = 'example1.svg'<br />
      const dynamicPathSvg = await import(`./assets/images/${imageName}.svg?component`)<br />
      <br />
      &lt;component :is="dynamicPathSvg" /&gt;
    </p>
    <div style="width: 200px;">
      <component :is="dynamicPathSvg" />
    </div>

    <h2>CSS の background-image の url に文字列パスを指定したとき</h2>
    <p>CSS）background-image: url("~/assets/images/example1.svg");</p>
    <div class="background-image"></div>

    <h2>style 属性で background-image の url を指定したとき</h2>
    <p>
      import ExampleSvg from '~/assets/images/example1.svg?url'<br />
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
