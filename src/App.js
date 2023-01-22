import React, { useState } from "react";
import "./styles.css";

var mountain = "mountain";
var beaches = "beaches";
var cities = "cities";

var mountainArray = [
  {
    place: "Nainital, Uttarakhand",
    rating: "4.5/5"
  },
  {
    place: "Munnar, Kerala",
    rating: "4/5"
  },
  {
    place: "Dharamshala, Himachal Pradesh",
    rating: "4/5"
  }
];
var beachesArray = [
  {
    place: "Candolim beach, Goa",
    rating: "4.5/5"
  },
  {
    place: "Om Beach, Gokarna",
    rating: "4/5"
  },
  {
    place: "Wooden posts on the beach, Pondicherry",
    rating: "4/5"
  }
];

var citiesArray = [
  {
    place: "Rishikesh",
    rating: "4.5/5"
  },
  {
    place: "Jodhpur",
    rating: "4/5"
  },
  {
    place: "Chennai",
    rating: "4/5"
  }
];

export default function App() {
  var [places, setPlaces] = useState("");

  function onClickHandler(item) {
    if (item === mountain) {
      // console.log("mountain clicked")
      places = Object.values(mountainArray);
      setPlaces(places);
    } else if (item === beaches) {
      places = Object.values(beachesArray);
      setPlaces(places);
    } else if (item === cities) {
      places = Object.values(citiesArray);
      setPlaces(places);
    }
  }
  // console.log(places[0]);
  return (
    <div className="App">
      <h1>Tranvel Spots</h1>
      <p>Checkout most beautiful place to visit. Select a type to know</p>
      <button onClick={() => onClickHandler(mountain)}>Mountain</button>
      <button onClick={() => onClickHandler(beaches)}>beaches</button>
      <button onClick={() => onClickHandler(cities)}>Cities</button>
      <hr />
      <ul>
        {Object.keys(places).map((key) => {
          return (
            <li>
              <p>{places[key].place}</p>
              <small>🌟 {places[key].rating}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
