import { useState } from "react";

const Radio = () => {
    const [drone, setDrone] = useState("");

    const handleChange = (e) => {
        // console.log(e.target.value);
        setDrone(e.target.value);
    };
    return (
        <fieldset>
  <legend>Select a maintenance drone: {drone}</legend>

  <div>
    <input type="radio" id="huey" name="drone" value="huey"  onChange={handleChange} />
    <label htmlFor="huey">Niklas</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" onChange={handleChange} />
    <label htmlFor="dewey">Goran</label>
  </div>

  <div>
    <input type="radio" id="react" name="drone" value="react" onChange={handleChange} />
    <label htmlFor="react">React</label>
  </div>
</fieldset>

    );
};

export default Radio;