import React, { useEffect, useState } from "react";
import { getMovies } from "../../../Services/MoviesServices";

import Card from "../../UI/Card/Card";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies(
      (response) => {
        console.log(response, "Success");
        setMovieList(response);
      },
      (error) => {
        console.log(error, "Errors!!!!");
      }
    );
  }, []);
  return (
    <div>
      <h4
        style={{
          margin: "Auto",
          marginTop: "50px",
          fontFamily: "cursive",
          border: "10px double rgb(236, 207, 37)",
          width: "50%",
          borderRadius: "20px",
          padding: "20px",
          backgroundColor: "seagreen",
          color: "bisque",
          caretColor: "transparent",
        }}
      >
        <b>Movie Mania</b>
      </h4>
      <div className={`container text-left`}>
        <div className={`row row-col-3`}>
          {movieList.map((r, i) => (
            <div className={`col`} key={i}>
              <Card
                cardTitle={r.Title}
                ratting={r.IMDBRating ? r.IMDBRating : 0}
                released={r.ReleaseDate}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListPage;
