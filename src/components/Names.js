import React, { useState } from "react";

const Names = ({ animal, setCheckedNames }) => {
  const [isChecked, setIsChecked] = useState(false);

  function checkedHandler() {
    setIsChecked(!isChecked);
    if (isChecked === true) {
      setCheckedNames((prev) => [...prev, animal.name]);
    } else {
      setCheckedNames((prev) => prev.filter((item) => item !== animal.name));
    }
  }

  return (
    <label>
      <input
        className={animal.name}
        type="checkbox"
        onChange={checkedHandler}
        checked={isChecked}
      ></input>{" "}
      {animal.name}
    </label>
  );
};

export default Names;
