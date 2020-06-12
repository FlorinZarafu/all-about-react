import React from "react";

const PersonList = () => {
  const persons = [
    {
      id: 1,
      name: "Florin",
      skill: "dev",
    },
    {
      id: 2,
      name: "Andrei",
      skill: "des",
    },
    {
      id: 3,
      name: "Alex",
      skill: "dnithing",
    },
    {
      id: 4,
      name: "Cristina",
      skill: "slut",
    },
  ];
  const personList = persons.map((person) => {
    return (
      <div key={person.id}>
        <h2>{person.name}</h2>
        <p>{person.skill}</p>
      </div>
    );
  });
  return <div> {personList}</div>;
};
export default PersonList;
