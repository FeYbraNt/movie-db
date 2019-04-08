import gql from "graphql-tag"

export default gql`
    query AllMoviesQuery ($search: String!) {
        movies(query: $search) {
            id
            title
            poster_path
            overview
        }
    }
`