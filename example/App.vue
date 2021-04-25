<template>
  <section id="app">
    <h2>Empty state component</h2>
    <EmptyState v-if="hasAction" :data="data" v-on:click="counter++"/>
    <EmptyState v-else :data="data" />

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
        <button @click="hasAction = true">Add Counter Action Example</button>

      </p>
      <p>
        <button @click="data = objectExampleEmpty">Empty Object Example</button>
        <button @click="data = arrayEampleEmpty">Empty Array Example</button>
        <button @click="data = stringExampleEmpty">Empty String Example</button>
        <button @click="data = numberExampleEmpty">Empty Number Example</button>
        <button @click="hasAction = false">Remove Counter Action Example</button>

      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      hasAction:true,
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
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  height: 100vh;
  padding-top: 30px;
  flex-flow: column;
  align-items: center;
}
.data-content{
  margin-top: 50px;
}
</style>