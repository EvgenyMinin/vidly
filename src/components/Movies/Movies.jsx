import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';
import './Movies.scss';

class Movies extends Component {
    state = {
        movies: getMovies()
    }
    render() {
        const { movies } = this.state;
        return (
            <React.Fragment>
                <p>Showing {movies.length} movies in database.</p>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(movie => (
                                <tr>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;