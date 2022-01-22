<template>
  <div>
    <h1>Mountains</h1>
    <p v-if="show">wwwwwwwwwwwwww</p>
    <button v-if="!show" @click="show = true">Show List</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>