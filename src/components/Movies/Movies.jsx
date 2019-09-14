import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from '../common/ListGroup';
import MoviesTable from './../common/MoviesTable';
import Pagination from '../common/Pagination';
import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';
import './Movies.scss';

class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: {path: 'title', order: 'asc'}
    }

    componentDidMount() {
        const genres = [{_id: '', name: 'All Genres'}, ...getGenres()];
        this.setState({
            movies: getMovies(),
            genres
        })
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies
        });
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({
            movies
        });
    }

    handleSort = (sortColumn) => {
        this.setState({
            sortColumn
        })
    }

    handlePageChange = page => {
        this.setState({
            currentPage: page
        })
    }

    handleGenreSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            currentPage: 1
        })
    }

    getPagedDate = () => {
        const {
            movies: allMovies,
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre
        } = this.state;
        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
    
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies }
    }

    render() {
        const {
            genres,
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre
        } = this.state;
        const {length: count} = this.state.movies;

        if (count === 0) {
            return <p>There are no movies in the database</p>
        }

        const { totalCount, data:movies } = this.getPagedDate();
        
        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup
                        items={genres}
                        selectedGenre={selectedGenre}
                        onGenreSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <Link
                        className="btn btn-primary new-movie"
                        to='/movies/new'
                    >
                        New Movie
                    </Link>
                    <p>Showing {totalCount} movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={totalCount}
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