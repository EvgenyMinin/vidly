import React, { Component } from 'react';
import Like from './../Like';
import TableHeader from '../TableHeader';
import './MoviesTable.scss';

class MoviesTable extends Component {
    state = {  }
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'ganre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { path: 'like' },
        { path: 'delete' },
    ];
    
    render() {
        const {movies, onDelete, onLike, onSort, sortColumn} = this.props;
        return (
            <table className='table movies-table'>
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
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
                                        onLikeToggle={() => onLike(movie)}
                                    />
                                </td>
                                <td><button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(movie)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        );
    }
}
 
export default MoviesTable;