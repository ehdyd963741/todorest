<template>
  <div class="container">
    <h2>Todo List</h2>
    <!-- 할일검색폼 -->
    <input
      class="form-control"
      type="text"
      v-model="searchText"
      placeholder="Search"
    />
    <!-- 서버에러 출력 -->
    <div style="color: red">{{ error }}</div>
    <!-- 할일입력 -->
    <TodoForm @add-todo="addTodo" />
    <!-- 목록없음 안내 -->
    <div v-if="!todos.length">추가된 Todo가 없습니다.</div>
    <!-- 할일목록 -->
    <TodoList
      :todos="filterTodos"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
    />
  </div>
</template>
<script>
import axios from "axios";
import { computed, ref } from "vue";
import TodoForm from "./components/TodoSimpleForm.vue";
import TodoList from "./components/TodoList.vue";
export default {
  components: {
    TodoForm,
    TodoList,
  },
  setup() {
    const todos = ref([]);
    const searchText = ref("");
    const filterTodos = computed(() => {
      if (searchText.value) {
        return todos.value.filter((todo) => {
          return todo.subject.includes(searchText.value);
        });
      }
      return todos.value;
    });
    const error = ref("");
    const addTodo = async (todo) => {
      try {
        await axios.post("http://localhost:3000/todos", {
          id: todo.id,
          subject: todo.subject,
          complete: todo.complete,
        });

        todos.value.push(todo);
      } catch (err) {
        error.value = "서버데이터 저장 실패";
      }
    };

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };
    const toggleTodo = (index) => {
      todos.value[index].complete = !todos.value[index].complete;
    };

    return {
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
      searchText,
      filterTodos,
      error,
    };
  },
};
</script>
<style>
#app {
  background-color: #999;
  height: 100vh;
}
.todostyle {
  text-decoration: line-through;
  color: gray;
}
.container {
  text-align: left;
}
.container > h2 {
  text-align: center;
  padding: 30px 0;
}
.form-control {
  margin-bottom: 5px;
}
</style>
