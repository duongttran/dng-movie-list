import React, { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'

//import Navbar from 'react-bootstrap/Navbar'
import Navigation from './components/Navigation'
import CarouselSlide from './components/CarouselSlide'
//import Button from 'react-bootstrap/Button'

import ReactPaginate from 'react-paginate';

const apiKey = process.env.REACT_APP_APIKEY
function App() {
  // let [movieList, setMovieList] = useState(null)
  let [movieList, setMovieList] = useState([]);
  let [allMovies, setAllMovies] = useState([]);
  
  let [listName, setListName] = useState("now_playing")

  let [totalPages, setTotalPage] = useState(0)

  let [genreList, setGenreList] = useState(null)

  let [value, setValue] = useState({ min: 1980, max: 2020 })
  let [value2, setValue2] = useState({ max: 10 })

  const getNowPlayingMovie = async (page) => {
    let url = `https://api.themoviedb.org/3/movie/${listName}?api_key=${apiKey}&language=en-US&page=${page}`
    let data = await fetch(url);
    let result = await data.json();

    setMovieList(result.results);
    setAllMovies(result.results);

    setTotalPage(result.total_pages)
    getMovieYear()
    console.log("movies", result)
  }

  let getGenreList = async () => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    let data = await fetch(url);
    let result = await data.json();
    setGenreList(result.genres);
    console.log(result.genres)
    getNowPlayingMovie(1);
    console.log("how the genre list look like", result)
  }


  let sortByPop = (order) => {
    //const duplicatedMovieList = movieList.slice(0);
    const duplicatedMovieList = [...movieList]
    const sortedMoveList = duplicatedMovieList.sort(function (a, b) {
      // return a.popularity - b.popularity;
      return (a.popularity - b.popularity) * order;

    });
    setMovieList(sortedMoveList);
  };

  let sortByRating = (order) => {
    //const duplicatedMovieList = movieList.slice(0);
    const duplicatedMovieList = [...movieList]
    const sortedMoveList = duplicatedMovieList.sort(function (a, b) {
    
      return (a.vote_average - b.vote_average) * order;

    });
    setMovieList(sortedMoveList);
    
  };

  
  useEffect(() => {
    console.log("reset the list");
    //getNowPlayingMovie(1);
    getGenreList()
  }, [totalPages, listName]);

  const handlePageClick = (page) => {
    getNowPlayingMovie(page.selected + 1);
  }

  const handleRatingSliderChange = (ratingSliderValue) => {
    console.log(ratingSliderValue)
    setValue2(ratingSliderValue);
    setMovieList(allMovies.filter(movie => movie.vote_average <= ratingSliderValue.max && movie.vote_average >= ratingSliderValue.min));
  }

  const handleYearSlider = (yearSliderValue) => {
    console.log(yearSliderValue)
    setValue(yearSliderValue);
    setMovieList(allMovies.filter(movie => Number(movie.release_date.split("-")[0]) <= yearSliderValue.max && Number(movie.release_date.split("-")[0]) >= yearSliderValue.min));
  }

  const searchByKeyword = (keyword, event) => {
    console.log(keyword)
    setMovieList(allMovies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase())));
    console.log("hihihi")
  }

  let getMovieYear = () => {
    let allMY = allMovies.map(movie => Number(movie.release_date.split("-")[0]))
    //   let maxYearInTheRange = allMY.reduce(function(a, b) {
    //     return Math.max(a, b);
    // });

    console.log("this is all years from movies allMY ", allMY)
    // console.log("this is latest year from movies allMY ", maxYearInTheRange)
  }


  if (movieList === null || genreList === null) {
    return <div>somthing is null
      <Spinner animation="border" />
    </div>;
  }
  return (
    <div>
      <Navigation onClick={setListName} handleSubmitSearch={searchByKeyword} />
      <CarouselSlide />

      <div>
        <MovieList movieList={movieList} genreFromApp={genreList} sortPopularity={sortByPop} sortRating={sortByRating} value={value} setValue={handleYearSlider} ratingValue={value2} setRatingValue={handleRatingSliderChange}/>

        <ReactPaginate className="see-more"
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        {/* <div className="see-more"><Button>See More</Button></div> */}
      </div>
    </div>
  );
}

export default App;