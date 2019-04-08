import FETCH_MOVIES_QUERY from "@/queries/FETCH_MOVIES_QUERY"
import { apolloClient } from "@/plugins/vue-apollo"

export const actions = {
    FETCH_MOVIES ({ commit }, term) {
        apolloClient.query({ 
            query: FETCH_MOVIES_QUERY,
            variables: {
                search: term
            } 
        }).then(response => {
            commit('SET_ALL_MOVIES', response.data.movies)
        })
    },
}