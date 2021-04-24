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

<style scoped>
.empty_state {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
}
.empty_state i {
  margin: auto;
  margin-bottom: 0px;
  font-size: 90px;
  color: #ccc;
}
.empty_state h3 {
  margin: 8px 0px;
  text-align: center;
  font-weight: normal;
}
.empty_state p {
  font-size: 14px;
  margin: 0px;
  color: #999;
  text-align: center;
}
.empty_state button {
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 8px 8px;
  margin: 20px auto auto auto;
  width: 50%;
  max-width: 200px;
  background: #348ac7;
  color: white;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  font-size: 12px;
}
.shrug-wrapper {
  width: 100%;
  text-align: center;
}
.shrug-outline {
  max-height: 100px;
  max-width: 100px;
  margin-top: 50px;
}
</style>