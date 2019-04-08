<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-dialog v-model="dialog" max-width="500">
        <MovieBox v-if="dialog" :movie="movieData" />
      </v-dialog>
      <h4 v-if="$apollo.loading">Loading...</h4>
      <h1 v-if="movies.length == 0">No movies found</h1>
      <v-flex v-else v-for="movie in movies" :key="movie.id" xs12 sm6 class="pa-0">
          <v-card height="150px" @click.stop="openModal(movie)" hover>
            <v-layout row wrap>
              <v-flex xs4 sm4>
                  <v-img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path" 
                    contain width="98px"></v-img>
              </v-flex>
              <v-flex xs8 sm8>
                <v-card-title primary-title>
                  <h3>{{ movie.title }}</h3>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MovieBox from "./MovieBox"
import { mapState } from "vuex";

export default {
  name: "MovieList",
  components: { MovieBox },
  data: () => { return { dialog: false, movieData: null } },
  computed: mapState(["movies"]),
  methods: {
    openModal(data) {
      this.movieData = data;
      this.dialog = true;
    }
  }
};
</script>

<style lang="css">
.v-image__image {
  border-radius: 10px;
}
</style>
