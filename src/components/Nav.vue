<template>
  <nav class="main-nav">
    <h1>Todo List</h1>
    <div class="links">
      <router-link to="/">Tasks</router-link>
      <router-link to="/add">Add Task</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.main-nav {
  padding: 10px;
}
.main-nav h1 {
  color: #222;
  text-align: center;
  margin: 2rem 0;
  font-size: 2rem;
}
.links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.links a {
  text-decoration: none;
  color: #555;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.links a:hover,
.links a.router-link-active {
  color: #222;
  scale: 1.1;
  border-bottom: 2px solid #000;
}
</style>
