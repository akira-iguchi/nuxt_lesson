<template>
  <!-- layoutが指定されないとデフォルトで適用される -->
  <!-- Document - HTML FIle > layout > page > page child = component -->
  <div>
    <div>My blog navigation bar here</div>

    <!-- これがないとpage以下が適用されない -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  layout: 'blog',
  // OR
  layout (context) {
    return 'blog'
  }
}
</script>