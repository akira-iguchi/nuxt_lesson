<template>
  <div class="lesson">
    <!-- ページ移動時に発生 -->
    <Loading/>

    <!-- ユーザーのインターネット接続があるかどうかをすばやく確認(isOnline, isOffline) -->
    <div v-if="$nuxt.isOnline">You are offline</div>

    <!-- コンポーネント名はそれ自信のパスディレクトリとファイル名をベースにします。 -->
    <LessonFetchState/>

    <!-- Lazy という接頭辞を使えば、コンポーネントのコードの読み込みを適切なタイミングまで遅らせることができる -->
    <LazyTheFooter />

    <p>Our Url is: {{ $config.baseURL}}</p>

    <img src="~/assets/images/your_image.png" />

    <!-- <p>{{ post.description }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  layout: 'blog',
  scrollToTop: true,

  // // asyncData は pages でのみ使用可能
  // async asyncData({ params, $http }) {
  //   const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
  //   return { post }
  // }
}
</script>
