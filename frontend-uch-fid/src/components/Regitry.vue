<template>
  <div class="mt-5">
    <b-form @submit.prevent="regitry">
      <b-form-group
        id="input-group-1"
        label="Usuario"
        label-for="username"
      >
        <b-form-input v-model="username" type="text" placeholder="Usuario" id="username" required></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email"
        label-for="email"
      >
        <b-form-input v-model="email" type="text" placeholder="Email" id="email" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Contrasenia" label-for="password">
        <b-form-input v-model="password" type="text" placeholder="Contrasena" id="password" required></b-form-input>
      </b-form-group>
       <b-form-group id="input-group-1" label="ConfirmarContrasenia" label-for="confirmPassword">
        <b-form-input v-model="confirmPassword" type="text" placeholder="ConfirmarContrasena" id="confirmPassword" required></b-form-input>
      </b-form-group>
      <b-button variant="outline-success" type="submit" block>Ingresar</b-button>
    </b-form>
    <pre>
        {{ $data }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "Regitry",
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    regitry() {
      firebase
        .auth()
        .signUpWithANewAccount(this.email, this.username, this.password, this.confirmPassword)
        .then((username) => alert('Usuario conectado. OK'), (error) => console.log(error));
    }
  }
};
</script>