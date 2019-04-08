<template>
    <v-toolbar-items>
        <v-btn icon @click.stop="search(searchTerm)"><v-icon>search</v-icon></v-btn>
        <v-text-field hide-details single-line v-model="searchTerm"></v-text-field>
    </v-toolbar-items>
</template>

<script>
export default {
    data() { return { searchTerm: '' } },
    methods: {
        search(value) {
            this.$store.dispatch('FETCH_MOVIES', value);
        }
    }
}
</script>
