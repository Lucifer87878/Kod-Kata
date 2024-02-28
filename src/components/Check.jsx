import { useState } from "react";

const Check = () => {
    const[cat, setCat] = useState(false);
    const[dog, setDog] = useState(false);
    const handleChangeCat = () => {
        setCat(!cat);
    };
    const handleChangeDog = () => {
        setDog(!dog);
    };
  return (
    <div>
      <legend>Choose your Pet:</legend>

      <div>
        <input type="checkbox" onChange={handleChangeCat} />
        <label htmlFor="Cat">Cat</label>
      </div>

      <div>
        <input type="checkbox" onChange={handleChangeDog} />
        <label htmlFor="Dog">Dog</label>
      </div>
      <p>{cat && "Cat" } {cat && dog && "&"} {dog && "Dog" }
      </p>
    </div>
  );
};

export default Check;
