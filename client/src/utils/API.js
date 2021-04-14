import axios from 'axios'

export default {
  getPet: function() {
    return axios('/api/pet')
  },
  getPets: function() {
    return axios('/api/pets')
  },
  savePet: function(data) {
    return axios.post('/api/pet', data)
  },
  getPetFriends: function(id) {
    return axios("/api/petFriends/" + id)
  },
}