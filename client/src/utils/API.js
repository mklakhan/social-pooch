import axios from 'axios'

export default {
  createUser: function(newUserId) {
    return axios.post('/api/user',{uid:newUserId})
  },

  getPet: function() {
    return axios('/api/pet')
  },
  getPets: function(id) {
    return axios("/api/pets/" + id)
  },
  savePet: function(data) {
    return axios.post('/api/pet', data)
  },
  getPetFriends: function(id) {
    return axios("/api/petFriends/" + id)
  },
  dislikePet: function(dislikeData) {    
    return axios.put("/api/dislikePet", dislikeData)
  },
  likePet: function(likeData) {    
    return axios.put("/api/likePet", likeData)
  }
}