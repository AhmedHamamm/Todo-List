<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-for="task in filteredTasks" :key="task.id">
      <SingleTask
        :task="task"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </div>
  </div>
</template>

<script>
import SingleTask from "../components/SingleTask.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "Home",
  components: { SingleTask, FilterNav },
  data() {
    return {
      tasks: [],
      current: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => (this.tasks = data))
      .catch((err) => console.log(err));
  },
  methods: {
    handleDelete(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },
    handleComplete(id) {
      let t = this.tasks.find((task) => {
        return task.id === id;
      });
      t.complete = !t.complete;
    },
  },
  computed: {
    filteredTasks() {
      if (this.current === "completed") {
        return this.tasks.filter((task) => task.complete === true);
      }
      if (this.current === "ongoing") {
        return this.tasks.filter((task) => task.complete === false);
      }
      return this.tasks;
    },
  },
};
</script>
