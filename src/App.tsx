import React from "react";
import SeasonHeading from "./components/SeasonHeading";
import "./App.css";
import Timeline from "./components/Timeline";

const DATA = [
  {
    season: "Winter",
    year: "23",
    locationList: [
      {
        date: "January 12 - January 19",
        location: "Åre, Sweden",
      },
    ],
  },
  {
    season: "Spring",
    year: "23",
    locationList: [
      {
        date: "April 10 - April 13",
        location: "Alingsås, Sweden",
      },
      {
        date: "May 26 - May 28",
        location: "Väddö, Sweden",
      },
    ],
  },
  {
    season: "Summer",
    year: "23",
    locationList: [
      {
        date: "July 7 - July 9",
        location: "Bosön, Sweden",
      },
      {
        date: "July 10 - July 12",
        location: "Stenungsund, Sweden",
      },
      {
        date: "July 12 - July 14",
        location: "Aneby, Sweden",
      },
      {
        date: "August 6",
        location: "Vaxholm, Sweden",
      },
      {
        date: "August 13 - August 21",
        location: "Kassiopi, Greece",
      },
    ],
  },
  {
    season: "Autumn",
    year: "23",
    locationList: [
      {
        date: "September 7 - September 10",
        location: "Aneby, Sweden",
      },
      {
        date: "May 26 - May 28",
        location: "Väddö, Sweden",
      },
    ],
  },
];

function App() {
  return (
    <div>
      {DATA.map((season) => {
        return (
          <div className="main-wrap">
            <SeasonHeading year={season.year}>{season.season}</SeasonHeading>
            <Timeline data={season} />
            <div style={{ width: 64, height: 64 }}></div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
