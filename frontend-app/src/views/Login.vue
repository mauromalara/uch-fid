<template>
  <div class="mt-5">
    <b-container class="bv-example-row">
      <h1 class="text-center">Bienvenido</h1>
      <b-row align-h="center">
        <b-col cols="12" md="4">
          <b-form @submit.prevent="login">
            <b-form-group id="input-group-1" label="Mail" label-for="mail">
              <b-form-input v-model="Mail" type="text" placeholder="Mail" id="mail" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-1" label="Contraseña" label-for="password">
              <b-form-input
                v-model="Password"
                type="password"
                placeholder="Contraseña"
                id="password"
                required
              ></b-form-input>
            </b-form-group>
            <b-button variant="outline-success" type="submit" block>Ingresar</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      Mail: "",
      Password: ""
    };
  },
  methods: {
    login: function() {
      let Mail = this.Mail;
      let Password = this.Password;
      this.$store
        .dispatch("login", { Mail, Password })
        .then(() => this.$router.push("/catalog"))
        .catch(err => console.log(err));
    }
  }
};
</script>