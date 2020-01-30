import types from "../constants/types";

export default {
  addPerson: (persons) => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: "Max",
      age: Math.floor(Math.random() * 40)
    };
    console.log('clicked');
    return {
      type: types.ADD_PERSON.type,
      payload: persons.concat(newPerson)
    };
  },
  deletePerson: (persons, personId) => ({
    type: types.DELETE_PERSON.type,
    payload: persons.filter(person => person.id !== personId)
  })
};
