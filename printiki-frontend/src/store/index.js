import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    products: []
  },
  mutations: {
    setProducts(state,payload){
      state.products = payload
    },
    addProduct(state,payload){
        state.products.push({
          name: payload.products.name,
          description: payload.products.description,
          price: payload.products.price,
          image: payload.products.image,
          category: payload.products.category
        })
    },
    removeProduct(state,id){
        state.products =  state.products.filter(product => product.id !== id)
    }
  },
  actions: {
    //get all todos
    getAllProducts ({ commit }) { 
      axios.get('http://localhost:3000/api')
        .then(response => {
          commit('setProducts', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    //Add a todo
    addProduct({ commit }, payload) {
      axios.post('http://localhost:3000/api/create/products', payload)
        .then(response => {
          commit('addProduct', response.data)
          
        })
        .catch(error => {
          console.log(error)
        })
    },
    async deleteProduct({ commit }, id) {
      try {
      await axios.delete(`http://localhost:3000/${id}`)
        commit('removeProduct', id)

        window.location.reload()
        
        
      } catch (error) {
        console.log(error) 
      }
        
  
    },
  },
  modules: {
  }
})
