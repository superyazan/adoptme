import Pet from "./pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Results;
