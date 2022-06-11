import { useState } from "react";

const ANIMALS = ["bird ", "cat", "dog", "rabbit"];
const BREED = [];

if(1+1 ===2){
  const [anima.setAnima] = useState('bird')
}

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
          <label htmlFor="breed">Breed</label>
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {BREED.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
