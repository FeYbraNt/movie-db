<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Movie DB</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <MovieList />
    </v-content>
  </v-app>
</template>

<script>
import MovieList from "./components/MovieList";

export default {
  name: "App",
  components: { MovieList }
};
</script>
