import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';
import Like from './../common/Like/index';
import Pagination from '../common/Pagination';
import './Movies.scss';

class Movies extends Component {

    state = {
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4
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

    render() {
        const { movies, pageSize, currentPage } = this.state;
        if (movies.length === 0) {
            return <p>There are no movies in the database</p>
        }
        return (
            <React.Fragment>
                <p>Showing {movies.length} movies in the database.</p>
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
                    itemsCount={movies.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        );
    }
}
 
export default Movies;