// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// import App from "./App";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
// import VueFire from "vuefire";
import firebase from "firebase";
//import "firebase/firestore";
//Vue.use(VueFire);
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
Vue.use(Vuetify);

Vue.config.productionTip = false;

firebase.initializeApp({
    apiKey: "AIzaSyA2HIFew5tebslN2sZomWKhU41XNKEpSvA",
    authDomain: "test-collection-b78ee.firebaseapp.com",
    databaseURL: "https://test-collection-b78ee.firebaseio.com",
    projectId: "test-collection-b78ee",
    storageBucket: "test-collection-b78ee.appspot.com",
    messagingSenderId: "95572509572",
    appId: "1:95572509572:web:327f0541779147546313d1"
});

const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

export const db = firebase.firestore();
// const vuetifyOptions = {};

// /* eslint-disable no-new */
// new Vue({
//     el: "#app",
//     components: { fileUploadToGCS },
//     template: "<fileUploadToGCS/>",
//     //vuetify: new Vuetify(vuetifyOptions)
//     vuetify: new Vuetify()
// });
