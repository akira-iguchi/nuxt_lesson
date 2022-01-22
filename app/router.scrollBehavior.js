// ページ移動時にトップへ（packages/vue-app/template/router.scrollBehavior.jsの上書き）
export default function (to, from, savedPosition) {
  return { x: 0, y: 0 }
}