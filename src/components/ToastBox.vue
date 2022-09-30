<template>
  <div class="alert toast-box" :class="`alert-${color}`" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "success",
    },
  },
  setup() {},
};
</script>

<style>
.toast-box {
  position: fixed;
  top: 35%;
  right: 45%;
}
</style>
