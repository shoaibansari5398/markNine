import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Marvel: [
    { name: "Doctor Strange", rating: "5/5" },
    { name: "Thor", rating: "4/5" },
    { name: "IronMan", rating: "4.5/5" }
  ],

  DC: [
    {
      name: "Batman",
      rating: "4/5"
    },
    {
      name: "Superman",
      rating: "5/5"
    },
    {
      name: "Black Adam",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Wolf of the Wall Street",
      rating: "4.5/5"
    },
    {
      name: "The Big Short",
      rating: "4/5"
    },
    {
      name: "The Social Dilemma",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Movie Recommendation App </h1>
      <p style={{ fontSize: "smaller" }}>Checkout my favorite Movies</p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      {/* <hr /> */}
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
