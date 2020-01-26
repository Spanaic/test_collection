<template>
  <div>
    <div>
      <a :href="link">
        <link-prevue :url="link" :onButtonClick="onClick"></link-prevue>
      </a>
    </div>
  </div>
</template>

<script>
import LinkPrevue from "link-prevue";

export default {
  components: {
    LinkPrevue
  },
  data() {
    return {
      //   link: "https://vuejs.org/"
      link: "https://mj-nanikiru.net/"
    };
  },
  methods: {
    onClick(prevue) {
      console.log(
        "click",
        prevue.images,
        prevue.title,
        prevue.url,
        prevue.description
      );
    }
  }
};
</script>

<style>
</style>