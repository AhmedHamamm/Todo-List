<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">
      View All
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      Ongoing
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed' }"
    >
      Completed
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style>
.filter-nav {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.filter-nav button {
  margin-right: 1rem;
  border-radius: 1rem;
  background: transparent;
  padding: 0.5rem 1rem;
  border: 2px solid #222;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}
.filter-nav button.active,
.filter-nav button:hover {
  background: #222;
  color: #fff;
}
</style>
