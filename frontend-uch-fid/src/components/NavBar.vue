<template>
  <div>
    <div>
      <b-navbar toggleable="md" type="dark" variant="danger">
        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand href>UCH</b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav v-for="item of items" :key="item.title">
              <b-nav-item :to="item.link" exact>{{ item.title }}</b-nav-item>
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
    items() {
      let menuItems = [
        {
          title: "Registro",
          link: "/register"
        },
        {
          title: "Login",
          link: "/login"
        },
        {
          title: "Catalogo",
          link: "/catalog"
        }
      ];
      return menuItems;
    }
  }
};
</script>