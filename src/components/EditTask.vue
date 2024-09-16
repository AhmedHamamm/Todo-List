<template>
  <div class="add-task-wrapper">
    <h1>Edit Task</h1>
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
      <button type="submit">Update Task</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: " this",
      description: "",
      uri: `http://localhost:3000/tasks/${this.id}`,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.description = data.description;
      });
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
        }),
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

<style></style>
