<script>
import JsonLogic from 'json-logic-js'
import Hero from './components/Hero'
import JSONInput from './components/JSONInput'

export default {
  name: 'app',
  components: { Hero, JSONInput },
  data: () => ({
    data: `{"value": 2}`,
    rule: `{"and" : [
    { ">" : [{"var":"value"}, 1] },
    { "<" : [{"var": "value"}, 3] }
]}`
  }),
  computed: {
    result () {
      try {
        const result = JsonLogic.apply(JSON.parse(this.rule), JSON.parse(this.data))
        return JSON.stringify(result)
      } catch (error) {
        console.warn(error) // eslint-disable-line
        return JSON.stringify('error')
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <Hero />
    <div id="main-content" class="container">
      <div class="inputs">
        <JSONInput title="Rules" v-model="rule" />
        <div class="inputs-footer">
          <JSONInput title="Data" v-model="data" />
          <JSONInput :options="{ theme: 'nord' }" title="Result" :value="result" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  height: 100%;
  display: grid;
  grid-template-rows: 115px 1fr;
}
#main-content {
  min-height: 100%;
  width: 100%;
}
.inputs {
  display: grid;
  height: 100%;
  grid-template-rows: 1fr 1fr;
  .inputs-footer {
    display: grid;
    height: 100%;
    grid-column-gap: 0.5em;
    grid-template-columns: 2fr 1fr;
  }
}
</style>
