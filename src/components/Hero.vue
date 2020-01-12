<script>
export default {
  name: 'Hero'
}
</script>

<template>
  <section class="hero is-small is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          JsonLogic Playground
        </h1>
        <h2 class="subtitle">
          A simple <a href="http://jsonlogic.com/" target="_blank">JsonLogic</a> tester,
          by <strong><a href="https://vinicius73.dev">Vinicius Reis</a></strong>
        </h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h1.title {
  color: #00d1b2 !important;
}
a {
  text-decoration: underline;
  text-decoration-color: #00d1b2
}
</style>
