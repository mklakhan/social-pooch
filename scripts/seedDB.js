const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialpooch",
{ useNewUrlParser: true, useFindAndModify: false});

const userSeed = [{ 
    username: "admin",
    password: "admin",
    email: "admin@test.com"
}]

const petSeed = [{
        pet_name: "Tiger",
        species: "Dog",
        gender: "Male",
        temperment: "Very needey, needs pets",
        playdate: "I enjoy playdates at the park with my friends!",
        zipcode: "60016"
    },
    {
        pet_name: "Chloe",
        species: "Dog",
        gender: "Female",
        temperment: "Gentle and shy",
        playdate: "I love to swim and chase balls!",
        zipcode: "60004"
    }
]

const likeSeed = [{
    petliked_name: "Chloe",
    date: new Date(Date.now())
}]


const runSeeder = async () => {
    try {
        console.log("in seeding")
      await db.User.remove({})
      await db.Pet.remove({})
      await db.Likes.remove({})
      console.log("remove completed")
      const result = await db.Pet.insertMany(petSeed, { raw: true })
      console.log("insert many", result);
      const petIds = result.map(pet => pet._id)
      const finalUserData = {
        ...userSeed,
        pet: petIds
      }
      console.log("final user", finalUserData)
      const user = await db.User.create(finalUserData)
      //await db.Pet.update({}, { user: user._id })

      console.log("creating like record")
      //const likeResult = await db.Likes.insertMany(likeSeed, { raw: true })
      //console.log("like record", likeResult);

    //   console.log("like Result", likeResult)
    //   const likeArray = [];
    //   likeArray.push(likeResult._id)
     
      console.log("pet ids", petIds)

      try {
        const petUpd = await db.Pet.findByIdAndUpdate(petIds[0],       
            {$push: { likes: likeResult[0]._id }}, 
            {new: true}            
            )
        console.log(petUpd)
      }
      catch(err){
          console.log(err)
      }

      console.log("completed seeding")
    } catch(err) {
        console.log("error in seeder", err)
      throw new err
    }
    process.exit()
  }
  
   runSeeder()

// db.Pet
// .remove({})
// .then(() => db.Pet.collection.insertMany(petSeed))
// .then(data => {
//     const petId = data._Id
// console.log(data.result.n + " records inserted!");
// //process.exit(0);
// })
// .catch(err => {
// console.error(err);
// process.exit(1);
// });


// db.User
// .remove({})
// .then(() => db.User.collection.insertMany(userSeed))
// .then(data => {
//   console.log(data.result.n + " records inserted!");
//   //process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });




// db.Likes
// .remove({})
// .then(() => db.Likes.collection.insertMany(likeSeed))
// .then(data => {
// console.log(data.result.n + " records inserted!");
// process.exit(0);
// })
// .catch(err => {
// console.error(err);
// process.exit(1);
// });
  