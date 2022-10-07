<template>
  <NavBar />
  <RouterView />
  <Transition name="fade">
    <ToastBox />
  </Transition>
</template>
<script>
import ToastBox from "@/components/ToastBox.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    ToastBox,
    NavBar,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
#app {
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
