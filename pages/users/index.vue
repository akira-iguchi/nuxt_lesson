<template>
  <div class="lesson">
    <!-- コンポーネント名はそれ自信のパスディレクトリとファイル名をベースにします。 -->
    <LessonFetchState/>

    <!-- Lazy という接頭辞を使えば、コンポーネントのコードの読み込みを適切なタイミングまで遅らせることができる -->
    <LazyTheFooter />

    <img src="~/assets/images/your_image.png" />
  </div>
</template>

<script>
export default {
  name: 'UserPage'
}
</script>
