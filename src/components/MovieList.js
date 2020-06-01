import React from 'react'
import MovieCard from './MovieCard'
import Dropdown from 'react-bootstrap/Dropdown'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import ReactPaginate from 'react-paginate';
import Spinner from 'react-bootstrap/Spinner'

export default function MovieList(props) {
    if (props.MovieList === null) {
        return <div>No data
            <Spinner animation="border" />
        </div>;
    }
    //console.log("list ", props.movieList)
    //console.log("genreFromApp", props.genreFromApp)
    return (
        <div class="main-stage">
            <div className="container-fluid">
                <div className="row main-part">
                
                    <div className="col-md-2 col-sm-12 filter-list">
                        <div className="filter-movie">

                            <Dropdown className="dropdown-filter">
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Sort Popularity
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => props.sortPopularity(1)}>From High to Low</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.sortPopularity(-1)}>From Low to High</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="dropdown-filter">
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Sort Rating
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => props.sortRating(-1)}>From High to Low</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.sortRating(1)}>From Low to High</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>


                            <div className="sortByRating">
                                <p>Sort by Rating:</p>
                                <InputRange className="slider"
                                    allowSameValues
                                    maxValue={10}
                                    minValue={0}
                                    value={props.ratingValue}
                                    onChange={props.setRatingValue} />
                            </div>

                            <div className="sortByYear">
                                <p>Sort by Year:</p>
                                <InputRange className="slider"
                                    maxValue={2020}
                                    minValue={1970}
                                    value={props.value}
                                    onChange={props.setValue} />
                            </div>

                            <div className="">
                                <p>Categories</p>
                                <div className="cate-chunk">
                                    {props.genreFromApp.map(item => <span onClick={() => props.sortByCate(item.id)}>{item.name}</span>)}
                                </div>

                                {/* how to sort cate:
                                    1. add function for each cate pill: onClick to trigger the function in App.js
                                    2. this function will compare its name/id with the movieList genre_ids
                                    3. filter cards that has same value
                                */}

                                {/* <div className="year-chunk">
                                    <p>Year</p>
                                    {props.movieList.map(item => <span onClick="">{item.release_date.split("-")[0]}</span>)}
                                </div> */}

                            </div>

                        </div>
                    </div>
                 
                    <div className="col-md-10 col-sm-12 movie-list">
                        {/* <h1 className="text-center">Duong's movie</h1> */}
                        <div className="list-of-movie">
                            {props.movieList.map((item) => {
                                return <MovieCard movie={item} openModalfromMovieList={()=> props.openModalfromApp(item.id)} genreFromMovieList={props.genreFromApp} sortByCateFromML={props.sortByCate}/>;
                            })}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
