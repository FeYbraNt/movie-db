<template>
        <v-flex>
            <v-card flat raised>
                <v-card-title class="headline grey lighten-2" primary-title>
                    <h2 class="headline">{{ movie.title }}</h2>
                </v-card-title>
                <v-layout row wrap class="pa-2" justify-start>
                    <v-flex xs4>
                        <v-img :src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path" 
                            contain></v-img>
                    </v-flex>
                    <v-flex xs8>
                        <v-card-text>
                            <h2><v-icon>movie</v-icon> Description</h2>
                            <hr>
                            <p class="mt-2">{{ movie.overview }}</p>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
</template>

<script>
export default {
    name: "MovieBox",
    props: ["movie"]
}
</script>
