import React, { Component } from 'react';
import Like from './../common/Like/index';
import ListGroup from '../common/ListGroup';
import Pagination from '../common/Pagination';
import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';
import { paginate } from '../../utils/paginate';
import './Movies.scss';

class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
    }

    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: getGenres()
        })
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies
        });
    }

    handleClickLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({
            movies
        });
    }

    handlePageChange = page => {
        this.setState({
            currentPage: page
        })
    }

    handleGenreSelect = (genre) => {
        console.log(genre);
    }

    render() {
        const {length: count} = this.state.movies;
        const { movies: allMovies, pageSize, genres, currentPage } = this.state;
        if (count === 0) {
            return <p>There are no movies in the database</p>
        }
        const movies = paginate(allMovies, currentPage, pageSize);
        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup
                        items={genres}
                        onGenreSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {count} movies in the database.</p>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map(movie => (
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>
                                            <Like
                                                liked={movie.liked}
                                                onLikeToggle={() => this.handleClickLike(movie)}
                                            />
                                        </td>
                                        <td><button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => this.handleDelete(movie)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
                
            </div>
        );
    }
}
 
export default Movies;