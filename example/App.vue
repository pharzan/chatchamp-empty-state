<template>
  <section id="app">
    <empty-state-component :data="nothingToShow"/>
    <div>
      Some content
      <button @click="nothingToShow=!nothingToShow">Toggle</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Example',
  data(){
    return{
      nothingToShow:false
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100vh;
  padding-top: 100px;
  flex-flow: column;
  align-items: center;
}

</style>