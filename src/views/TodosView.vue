<template>
  <div class="container">
    <h2>Todo 수정</h2>
    <TodoForm :editing="true" />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
export default {
  components: {
    TodoForm,
  },
  emits: [
    // "update-todo-toast",
    // "update-load-fail-toast",
    // "update-todo-fail-toast",
    // "err-subject-toast",
  ],
  setup() {
    return {};
  },
};
</script>

<style></style>
