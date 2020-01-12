<script>
export default {
  name: 'JSONInput',
  props: {
    value: String,
    title: String,
    options: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    cmOptions () {
      return {
        lineNumbers: true,
        mode: 'application/json',
        ...this.options
      }
    },
    hasError () {
      return !!this.error
    },
    error () {
      try {
        JSON.parse(this.value)
        return null
      } catch (error) {
        return error.message
      }
    }
  }
}
</script>

<template>
  <div class="json-input">
    <h2 class="title" :class="{'has-text-danger': hasError}">
      {{ hasError ? error : title }}
    </h2>
    <codemirror
      :value="value"
      v-on="$listeners"
      :options="cmOptions" />
  </div>
</template>

<style lang="scss">
.json-input {
  display: grid;
  grid-template-rows: 30px 1fr;
  h2 {
    margin: 0;
    font-size: 1.5em;
  }
  .vue-codemirror {
    height: 100%;
  }
  .CodeMirror {
    height: 100% !important;
  }
}
</style>
