<template>
  <div>
    <div>
      <b-navbar toggleable="md" variant="info">
        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand href>UCH</b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <span v-if="isLoggedIn">
                <b-nav-item to="/catalog" exact>Catalogo</b-nav-item>
              </span>
              <span v-if="isLoggedIn">
                <b-nav-item @click="logout">Logout</b-nav-item>
              </span>
              <span v-if="!isLoggedIn">
                <b-nav-item to="/register">Registro</b-nav-item>
              </span>
              <span v-if="!isLoggedIn">
                <b-nav-item to="/login">Ingresar</b-nav-item>
              </span>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>