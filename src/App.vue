<template>
  <v-app>
    <v-toolbar app fixed>
      <v-toolbar-title class="headline text-uppercase">
        <span>Movie DB</span>
      </v-toolbar-title>
      <v-spacer class="hidden-xs-only"></v-spacer>
      <SearchBox />
    </v-toolbar>
    <v-content>
      <MovieList />
    </v-content>
  </v-app>
</template>

<script>
import MovieList from "@/components/MovieList"
import SearchBox from "@/components/SearchBox"

export default {
  name: "App",
  components: { MovieList, SearchBox }
};
</script>
