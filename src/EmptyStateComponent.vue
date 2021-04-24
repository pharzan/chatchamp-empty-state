<template>
  <div class="empty_state">
    <div class="shrug-wrapper">
      <img class="shrug-outline" :src="image" />
    </div>
    <h3 class="title-outline">{{ title }}</h3>
    <p class="subtitle-outline">{{ subTitle }}</p>
    <button>Call to action</button>
  </div>
</template>

<script>
import './styles/index.scss'

/**
 * Component documentation
 */
export default {
  name: "empty-state-component",
  props: {
    image: {
      type: String,
      default: "@/assets/shrug-emoji.png",
      required: false,
    },
    title: {
      type: String,
      default: "Nothing to show here...",
      required: false,
    },
    subTitle: {
      type: String,
      default: "We couldn't find anything to show and thats all I know",
      required: false,
    },
  },
};
</script>
