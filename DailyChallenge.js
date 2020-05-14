let pets = [
    {
      name: "Rex",
      age: 4,
      ownerId: 42
    },{
      name: "Spot",
      age: 7,
      ownerId: 132
    },{
      name: "Scooby",
      age: 3,
      ownerId: 546
    },{
      name: "Lucky",
      age: 1,
      ownerId: 42
    }
  ];
  let people = [
    {
      name: "Luke",
      id: 42
    },{
      name: "Shaggy",
      id: 546
    },{
      name: "Jade",
      id: 132
    }
  ];


  function mapet(pet){
      function findpersonById(owner){
          return owner.id == pet.owneriId
      }
      let owner = people.find(findPweersonById);
      return{
          name: pet.name,
          age: pet.age,
          owner: owner.name
      };
  }

  let detailedPets = pets.map(mapet);
  console.log(detailedPets);