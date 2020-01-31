<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">Home</router-link>
        <router-link to="/curriculum/upsert">Create</router-link>
      </div>
    </v-app-bar>

    <v-content> <router-view></router-view> </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
