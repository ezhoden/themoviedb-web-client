import React from 'react';

class DetailsPage extends React.Component {
    render() {
        return (
            <h2>Film id is {this.props.match.params.movieId}</h2>
        )
    }
}

export default DetailsPage;