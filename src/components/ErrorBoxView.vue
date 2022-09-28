<template>
  <div class="red">
    {{ errtext }}
  </div>
</template>

<script>
export default {
  props: ["errtext"],
  setup() {
    return {};
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
