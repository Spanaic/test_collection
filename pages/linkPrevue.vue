<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" md="8" sm="12" v-for="(item, i) in items.link" :key="i">
          <a :href="item">
            <link-prevue :style="width" :url="item" :onButtonClick="onClick(item)"></link-prevue>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import LinkPrevue from "link-prevue";
import LinkPrevue from "@/components/LinkPrevue";

export default {
  components: {
    LinkPrevue
  },
  data() {
    return {
      //   link: "https://vuejs.org/"
      //   link: "https://mj-nanikiru.net/",
      items: {
        link: [
          "https://www.google.com/",
          "https://www.amazon.co.jp/",
          "https://www.apple.com/"
        ]
      },
      item: "",
      width: "300px"
    };
  },
  methods: {
    onClick(prevue) {
      console.log(
        "click"
        // prevue.images,
        // prevue.title,
        // prevue.url,
        // prevue.description
      );
    }
  }
};
</script>

<style scoped>
</style>