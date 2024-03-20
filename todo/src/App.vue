<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<template>
  <div id = "app">
    <h1>TODO App</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder = "Enter new todo" />
      <button type = "submit">Add</button>
    </form>
    <ul>
      <li v-for = "(todo,index) in todos" :key ="todo.id">
        <span :class = "{done: todo.done}" @click = "toggleTodo(index)">
        {{  todo.text }}
        </span>
        <button @click="removeTodo(index)">X</button>
      </li>
    </ul>
  </div>

  <div>
    <button @click="filter = 'all'">All</button>
    <button @click="filter = 'active'">All</button>
    <button @click="filter = 'done'">All</button>
  </div>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

<script>
import {ref,computed} from "vue";

export default {
  name: 'App',
  setup() {
    const newTodo = ref(""); //ตัวแปรสำหรับเก็บ todo ใหม่
    const todos = ref([]); // ตัวแปรสำหรับเก็บ todo ทั้งหมด

    //fuction สำหรับเพิ่ม todo ใหม่
    const addTodo = () => {
      if (newTodo.value) {
        todos.value.push({
          id: Data.now(),
          text: newTodo.value,
          done: false,
        });
        newTodo.value = "";
      }
    };
    //toggle todo status
    const toggleTodo = (index) => {
      todo.value[index].done = !todos.valuel[index].done;
    };

    //remove todo
    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const filter = ref("all");

    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "done":
          return todos.value.filter((todo) => todo.done);
        case "active":
          return todos.value.filter((todo) => !todo.done);
        default:
          return todos.value;
      }

    });


    return {
      newTodo,
      todos,
      addTodo,
      toggleTodo,
      removeTodo,
      filter,
      filteredTodos,
    };
  },
};
</script>

<style>
/* เพิ่ม CSS ในภายหลัง*/
</style>

