import { defineConfig } from 'umi';
import pxtorem from 'postcss-px2rem'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  // history: { type: 'hash' },
  dynamicImport: {},
  // ssr: {
  //   mode: 'stream'
  // },
  exportStatic: {},
  fastRefresh: {},
  // mfsu:{},
  // alias: {
  //   lib: '@/lib',
  // },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // 设置 alias
    memo.resolve.alias.set('lib', '@/lib');

    // 删除 umi 内置插件
    // memo.plugins.delete('progress');
    // memo.plugins.delete('friendly-error');
    // memo.plugins.delete('copy');
  },
  cssLoader: {
    localsConvention: 'camelCase'
  },
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 750, // 根据设计稿设置
      propList: ['*']
   }),
  ],
  hash: true,
  outputPath: "docs",
  publicPath: process.env.NODE_ENV === 'production' ? '/umi-app/' : '/',
});
