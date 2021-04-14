import axios from 'axios'

export default {
  createUser: function(newUserId) {
    return axios.post('/api/user',{uid:newUserId})
  },

  getPet: function() {
    return axios('/api/pet')
  },
  getPets: function() {
    return axios('/api/pets')
  },
  savePet: function(data) {
    return axios.post('/api/pet', data)
  }
}