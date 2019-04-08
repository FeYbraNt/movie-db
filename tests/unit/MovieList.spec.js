import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MovieList from '@/components/MovieList.vue'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import VueApollo from 'vue-apollo'
import apolloProvider from '@/plugins/vue-apollo'

// Create a temporary Vue instance
const localVue = createLocalVue();
localVue.use(Vuex, VueApollo);

describe('MovieList.vue', () => {
  let store;

  const data = [{
        id: 11,
        poster_path: "/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
        title: "Star Wars"
  }]

  beforeEach(() => {
      store = new Vuex.Store({
          state: {
              movies: data
          },
          actions,
          mutations
      })
  })

  it('diplayed movies correctly with query data', () => {
    const wrapper = shallowMount(MovieList, { localVue, store, apolloProvider });
    wrapper.setData({ movies: data })
    expect(wrapper.element).toMatchSnapshot();
  })

})
