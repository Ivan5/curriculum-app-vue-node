<template>
  <v-row no-gutters class="display-curricula-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <div class="page-header">
        <h1>All Curriculums</h1>
        <v-btn>Create New</v-btn>
      </div>

      <div class="curricula-list">
        <v-card
          class="curriculum-card"
          outlined
          v-for="curriculum in curriculaData"
          :key="curriculum.id"
        >
          <v-card-title class="headline">{{curriculum.name}}</v-card-title>
          <v-card-subtitle>{{curriculum.description}}</v-card-subtitle>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import curriculaData from "@/data/curricula.js";

export default {
  name: "DisplayCurricula",
  data() {
    return {
      display: false,
      curriculaData
    };
  }
};
</script>
