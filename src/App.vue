<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link">
              Home
            </a>
          </router-link>
          <router-link to="/users" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">
              Users
            </a>
          </router-link>
          <router-link to="/add" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">
              Add user
            </a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
