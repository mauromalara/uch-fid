<template>
  <div class="mt-5">
    <b-form @submit.prevent="login">
      <b-form-group
        id="input-group-1"
        label="Usuario"
        label-for="username"
        description="Puede ser usuario o email"
      >
        <b-form-input v-model="username" type="text" placeholder="Usuario" id="username" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Contrasenia" label-for="password">
        <b-form-input v-model="password" type="text" placeholder="Contrasena" id="password" required></b-form-input>
      </b-form-group>
      <b-button variant="outline-success" type="submit" block>Ingresar</b-button>
    </b-form>
    <pre>
        {{ $data }}
    </pre>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((username) => alert('Usuario conectado. OK'), (error) => console.log(error));
    }
  }
};
</script>