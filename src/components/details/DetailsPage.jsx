import React from 'react';

class DetailsPage extends React.Component {
    render() {
        return (
            <h2>Movie id is {this.props.match.params.movieId}</h2>
        )
    }
}

export default DetailsPage;