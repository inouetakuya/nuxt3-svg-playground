// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore TS2345: Argument of type '{ devtools: { enabled: boolean; }; vite: { plugins: Plugin_2[]; }; }' is not assignable to parameter of type 'InputConfig<NuxtConfig, ConfigLayerMeta>'.   Object literal may only specify known properties, and 'vite' does not exist in type 'InputConfig<NuxtConfig, ConfigLayerMeta>'.
  vite: {
    plugins: [svgLoader({ defaultImport: 'url' })],
  },
})
