<template>
  <div class="container">
    {{ loginState }}
    <h1>Todo Create</h1>
    <TodoForm />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import TodoForm from "@/components/TodoForm.vue";
import { computed } from "vue";
export default {
  components: {
    TodoForm,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const loginState = computed(() => store.getters["kakao/getLoginState"]);
    if (!loginState.value) {
      alert("로그인을 하세요");
      router.push({ name: "Home" });
    }
    return {
      loginState,
    };
  },
};
</script>

<style></style>
