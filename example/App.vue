<template>
  <section id="app">
    <empty-state-component :data="data" v-on:click="counter++"/>
    <div class="data-content">
      The Data Content:
      <p>
        {{ data }}
      </p>
      The call to action clicked {{counter}} times.

      <p>
        <button @click="data = objectExample">Set Object Example</button>
        <button @click="data = arrayEample">Set Array Example</button>
        <button @click="data = stringExample">Set String Example</button>
        <button @click="data = numberExample">Set Number Example</button>
      </p>
      <p>
        <button @click="data = objectExampleEmpty">Set Object Example</button>
        <button @click="data = arrayEampleEmpty">Set Array Example</button>
        <button @click="data = stringExampleEmpty">Set String Example</button>
        <button @click="data = numberExampleEmpty">Set Number Example</button>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      counter:0,
      data: false,
      objectExample: { key: "value" },
      arrayEample: ["example"],
      stringExample: "example",
      numberExample: 1,
      objectExampleEmpty: { },
      arrayEampleEmpty: [],
      stringExampleEmpty: "",
      numberExampleEmpty: NaN,
    };
  },
  methods:{
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100vh;
  padding-top: 100px;
  flex-flow: column;
  align-items: center;
}
.data-content{
  margin-top: 50px;
}
</style>