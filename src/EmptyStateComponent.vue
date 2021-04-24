<template>
  <div v-if="!isEmpty(data)" class="empty_state">
    <div class="shrug-wrapper">
      <img class="shrug-outline" :src="image" />
    </div>
    <h3 class="title-outline">{{ title }}</h3>
    <p class="subtitle-outline">{{ subTitle }}</p>
    <button @click="$emit('click')">Call to action!</button>
  </div>
</template>

<script>
import "./styles/index.scss";
import defualtImage from "@/assets/shrug-emoji.png";


/**
 * Component documentation
 */
export default {
  name: "empty-state-component",
  props: {
    data: {
      type: [Array, String, Object, Boolean, Number],
      default: false,
      required: false
    },
    image: {
      type: String,
      default: defualtImage,
      required: false,
    },
    title: {
      type: String,
      default: "Nothing to show here...",
      required: false,
    },
    subTitle: {
      type: String,
      default: "We couldn't find anything to show and thats all we know",
      required: false,
    },
  },
  methods:{
    isEmpty(data){
      // gets a data of any type and determains if empty
      if(!data) return true;
      if(Array.isArray(data) && !data.length) return true
      if(typeof data==='object' && !Object.keys(data).length) return true


      return false
    }
  }
};
</script>
