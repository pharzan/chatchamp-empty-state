<template>
  <div v-if="isEmpty(data)" class="empty_state">
    <div class="image-wrapper">
      <img v-if="image" class="image-outline" :src="image" />
      <img v-else class="image-outline" src="~@/assets/haunted-house.svg" />
    </div>
    <p class="text title-outline">{{ title }}</p>
    <p class="text subtitle-outline">{{ subTitle }}</p>
    <button v-if="hasButton" @click="$emit('click')">Call to action!</button>
  </div>
</template>

<script>
import "./styles/index.scss";

export default {
  name: "EmptyState",
  props: {
    data: {
      type: [Array, String, Object, Boolean, Number],
      default: false,
      required: false
    },
    image: {
      type: String,
      // default: image,
      required: false,
    },
    title: {
      type: String,
      default: "Nothing to show here",
      required: false,
    },
    subTitle: {
      type: String,
      default: "We couldn't find anything to show and thats all we know",
      required: false,
    }
  },
  computed:{
    hasButton(){
      if(typeof this.$listeners.click ==='function') return true;
      return false
    }
  },

  methods:{
    isEmpty(data){
      // gets a data of any type and determains if empty

      if(Array.isArray(data) && data.length===0) return true
      if(typeof data==='object' && !Object.keys(data).length) return true
      if(typeof data==='string' && data.length===0) return true
      if(!data) return true
      
      return false
    }
  }
};
</script>
