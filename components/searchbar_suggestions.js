import React from "react";

function Suggestions({ cities }) {
  const styles = {
    suggestions: {
      position: "absolute",
      border: "1px solid black",
      padding: "0 1.5rem",
      width: "100%",
      display: cities.length > 0 ? "block" : "none",
    },
  };

  return (
    <div className="suggestions" style={styles.suggestions}>
      {cities.map(({ city, region }) => (
        <p>
          {city} ({region})
        </p>
      ))}
    </div>
  );
}

export default Suggestions;
