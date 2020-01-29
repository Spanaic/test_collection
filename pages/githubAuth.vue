<template>
  <div>
    <h1>Firebase Auth for Github</h1>
    <div v-if="user !== null">
      {{ user }}
      <br />
      <br />
      {{ display_name }}
    </div>
    <button @click.prevent="login">Github login</button>
    <!-- <button @click.prevent="getDisplayName">Github get desplay name</button> -->
    <button @click.prevent="logOut">Github log out</button>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  data() {
    return {
      user: null,
      display_name: ""
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
          let name = res.getDisplayName();
          console.log("name", name);
          console.log("this.user", this.user);
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    logOut() {
      const githubAuth = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null;
          console.log("log out success!!");
        });
    }
    // getDisplayName() {
    //   const githubAuth = new firebase.auth.GithubAuthProvider();
    //   firebase
    //     .auth()
    //     .getDisplayName(githubAuth)
    //     .then(res => {
    //       this.display_name = res;
    //     });
    // }
  }
};
</script>

<style>
</style>