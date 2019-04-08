import ALL_MOVIES_QUERY from "@/queries/ALL_MOVIES_QUERY"
import { apolloClient } from "@/plugins/vue-apollo"

export const actions = {
    FETCH_ALL_MOVIES ({ commit }) {
        apolloClient.query({ 
            query: ALL_MOVIES_QUERY 
        }).then(response => {
            commit('SET_ALL_MOVIES', response.data.movies)
        })
    }
}