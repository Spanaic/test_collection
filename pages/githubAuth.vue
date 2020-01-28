<template>
  <div>
    <h1>Firebase Auth for Github</h1>
    <button @click.prevent="login">Github login</button>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    login() {
      const githubAuth = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signInWithPopup(githubAuth)
        .then(res => {
          let token = res.credential.accessToken;
          this.user = res.user;
          console.log("this.user", this.user);
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }
};
</script>

<style>
</style>