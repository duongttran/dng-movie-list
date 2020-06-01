import React from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'

export default function MovieCard(props) {

    if (props.genreFromMovieList === null) {
        return (<div>something wrong with genreFromMovieList</div>)
    }
    let movie = props.movie;
    //let genres = props.genreFromMovieList;
    // console.log("genreFromMovieList:", props.genreFromMovieList)
    return (

        <Card className="card-item">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className="movie-description">
                    {movie.overview}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Year: {movie.release_date.split("-")[0]}</ListGroupItem>
                <ListGroupItem>Rating (Vote Average): {movie.vote_average}</ListGroupItem>
                <ListGroupItem>Popularity: {movie.popularity}</ListGroupItem>

                <ListGroupItem>Genre: {movie.genre_ids.map(movieId => {
                    return (
                        <Badge pill variant="success" className="success" onClick={() => props.sortByCateFromML(movieId)}>{props.genreFromMovieList.find(genreId => genreId.id === movieId).name}
                        </Badge>)
                })}

                </ListGroupItem>
            </ListGroup>
            <Card.Body className="card-link">
                <Card.Link href={`https://www.themoviedb.org/movie/${movie.id}?language=en-US`} target="_blank">More Details</Card.Link>
                <Card.Link href="#0" onClick={()=>props.openModalfromMovieList()}>Play trailer</Card.Link>
            </Card.Body>
        </Card>

    );
}

