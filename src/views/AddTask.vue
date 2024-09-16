<template class="add-task">
  <div class="add-task-wrapper">
    <h1>Add Task</h1>
    <form class="add-task-form" @submit.prevent="handleSubmit">
      <input
        class="add-task-input"
        type="text"
        v-model="title"
        placeholder="Task Title"
      />
      <hr />
      <textarea
        class="add-task-input"
        type="textarea"
        v-model="description"
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      complete: false,
    };
  },
  methods: {
    handleSubmit() {
      let task = {
        title: this.title,
        description: this.description,
        complete: false,
      };
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.add-task {
  background-color: #f5f5f5;
  height: 100vh;
}
.add-task-wrapper {
  background-color: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 1rem;
}
.add-task-wrapper h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.add-task-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.add-task-form input,
textarea {
  width: 90%;
  margin: 1rem;
  padding: 1rem 2rem;
  border: 1px solid #000;
  border-radius: 1rem;
  font-size: 1rem;
  background-color: #f5f5f5;
}
.add-task-form textarea {
  height: 5rem;
}
.add-task-form hr {
  width: 90%;
  margin: 1rem;
}

.add-task-form button {
  width: 50%;
  margin: 1rem;
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.add-task-form button:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
}
</style>
