<template>
  <div class="task" :class="{ complete: task.complete }">
    <div class="actions">
      <h3 @click="this.showDetails = !this.showDetails">{{ task.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditTask', params: { id: task.id } }">
          <span class="material-icons">edit</span>
        </router-link>
        <span class="material-icons -icon" @click="deleteTask">delete</span>
        <span class="material-icons complete-icon" @click="toggleComplete"
          >done</span
        >
        <span
          class="material-icons"
          @click="this.showDetails = !this.showDetails"
        >
          {{ this.showDetails ? "expand_less" : "expand_more" }}
        </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ task.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/tasks/" + this.task.id,
    };
  },
  methods: {
    deleteTask() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.task.id))
        .catch((err) => console.log(err));
    },
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.task.complete }),
      })
        .then(() => {
          this.$emit("complete", this.task.id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.task {
  background: #f5c2c0;
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons {
  display: flex;
  gap: 1rem;
}
.material-icons {
  color: #555;
  opacity: 0.6;
}
.material-icons:hover {
  opacity: 1;
}
.complete {
  background: #b3e6b3;
}

.complete .complete-icon {
  color: #f00;
}
</style>
