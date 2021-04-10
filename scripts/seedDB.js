const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialpooch");

const userSeed = [{ 
    username: "admin",
    password: "admin",
    email: "admin@test.com"
}]

const petSeed = [{
        name: "Tiger",
        species: "Cat",
        gender: "Male",
        temperment: "needs pets"
    },
    {
        name: "Chloe",
        species: "Cat",
        gender: "Female",
        temperment: "gentle"
    }
]

const likeSeed = [{
    petliked_name: "Chloe",
    date: new Date(Date.now())
}]

// const runSeeder = async () => {

//     console.log("run seeder");

//     try {
//       await db.User.remove({})
//       await db.Pet.remove({})
//       await db.Likes.remove({})

//       const result = await db.Likes.insertMany(likeSeed, { raw: true })
//       const likeIds = result.map(like => like._id)
//       const finalPetData = {
//         ...petSeed,
//         likes: likeIds
//       }
//       const pet = await db.Pet.create(finalPetData)
//       await db.Likes.update({}, { pet: pet._id })
//     } catch(err) {
//         console.error("error in database seed");
//         throw new err
//     }
//     process.exit()
//   }
  
//   runSeeder()


db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  //process.exit(0);
})
.catch(err => {
  console.error(err);
  //process.exit(1);
});


db.Pet
.remove({})
.then(() => db.Pet.collection.insertMany(petSeed))
.then(data => {
console.log(data.result.n + " records inserted!");
//process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});

db.Likes
.remove({})
.then(() => db.Likes.collection.insertMany(likeSeed))
.then(data => {
console.log(data.result.n + " records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});
  