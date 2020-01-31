<template>
  <v-app>
    <top-nav />

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav";
export default {
  name: "App",

  components: {
    TopNav
  },

  data: () => ({
    //
  })
};
</script>
