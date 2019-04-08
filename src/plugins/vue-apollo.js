import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

// Create the apollo client
export const apolloClient = new ApolloClient({
    uri: 'http://movie-database-graphql.herokuapp.com/graphql'
});
  
// Create the apollo provider
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})
  
// Install the vue plugin
Vue.use(VueApollo);

export default apolloProvider