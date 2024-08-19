const findTheOldest = (people) =>{
    let edad = -Infinity;
    let personaFinal = null;
    for(let persona of people){
        if(persona.yearOfDeath - persona.yearOfBirth > edad){
            edad = persona.yearOfDeath - persona.yearOfBirth;
            personaFinal = persona;
        }
    }
    return personaFinal
}


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Facu",
        yearOfBirth: 1912,
        yearOfDeath: 11941,
      },
      {
        name: "eze",
        yearOfBirth: 1912,
        yearOfDeath: 193,
      },
  ]


console.log(findTheOldest(people))
  