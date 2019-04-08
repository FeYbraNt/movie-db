import gql from "graphql-tag"

export default gql`
    query AllMoviesQuery {
        movies(query: "Star Wars") {
            id
            title
            poster_path
            overview
        }
    }
`