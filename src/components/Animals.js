import React from "react";

const Animals = ({ animal, checkedNames }) => {
  console.log("animals");
  console.log(checkedNames);
  return (
    <div>
      {checkedNames ? (
        <li
          className="emoji"
          style={{
            fontSize: "90px",
            height: "100px",
            width: "100px",
            objectFit: "contain",
          }}
        >
          {animal.emoji}
        </li>
      ) : (
        "pp"
      )}
    </div>
  );
};

export default Animals;
