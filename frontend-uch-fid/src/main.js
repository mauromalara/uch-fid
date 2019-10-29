import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDtiGD2CZUC9bOIkYaVK40YRGjE8ng5oNE",
  authDomain: "uch-fid-proof.firebaseapp.com",
  databaseURL: "https://uch-fid-proof.firebaseio.com",
  projectId: "uch-fid-proof",
  storageBucket: "uch-fid-proof.appspot.com",
  messagingSenderId: "738638122345",
  appId: "1:738638122345:web:b33e53ffff898ed0f801f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (username){
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')  
});