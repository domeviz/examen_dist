<template>
  <div class="navbar">
    <div class="navbar-toggle" @click="toggleNavbar">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h1 class="navbar-title">Biblioteca Programación Distribuida</h1>
    <div class="navbar-links" :class="{ 'active': navbarActive }">
      <router-link to="/books" class="nav-link" @click="toggleNavbar">Libros</router-link>
      <router-link to="/authors" class="nav-link" @click="toggleNavbar">Autores</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarActive: false
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarActive = !this.navbarActive;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #CDB4DB;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
}

.navbar-title {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  flex-grow: 1;
}

.navbar-toggle {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
}

.navbar-toggle span {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
  transition: transform 0.3s;
}

.navbar-toggle.active span:first-child {
  transform: translateY(8px) rotate(45deg);
}

.navbar-toggle.active span:nth-child(2) {
  opacity: 0;
}

.navbar-toggle.active span:last-child {
  transform: translateY(-8px) rotate(-45deg);
}

.navbar-links {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #f497a9;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(-250px);
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  overflow-y: auto;
}

.navbar-links.active {
  transform: translateX(0);
}

.nav-link {
  display: block;
  color: white;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 18px;
}

.nav-link:hover {
  background-color: #8093f1;
}

@media (max-width: 768px) {
  .navbar {
    padding: 10px;
  }

  .navbar-links {
    width: 200px;
  }
}
</style>
