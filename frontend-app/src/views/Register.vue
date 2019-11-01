<template>
  <div class="mt-5">
    <b-form @submit.prevent="regitry">
      <b-form-group
        id="input-group-1"
        label="Mail"
        label-for="mail"
      >
        <b-form-input v-model="Mail" type="text" placeholder="Mail" id="mail" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Contraseña" label-for="password">
        <b-form-input v-model="Password" type="password" placeholder="Contraseña" id="password" required></b-form-input>
      </b-form-group>
      <b-button variant="outline-success" type="submit" block>Registrarme</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Regitry",
  data() {
    return {
      Mail: '',
      Password: '',
      Role: 'Admin'
    };
  },
  methods: {
    regitry: function () {
      let Mail = this.Mail;
      let Password = this.Password;
      let Role = this.Role;
      this.$store
        .dispatch("register", { Mail, Password, Role })
        .then(() => this.$router.push("/login"))
        .catch(err => console.log(err));
    }
  }
};
</script>