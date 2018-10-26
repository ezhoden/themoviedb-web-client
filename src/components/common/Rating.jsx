import React from 'react';
import styled from 'styled-components';
import { rateMovie, deleteRating } from '../../services/api';

const RatingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

const RatingSelect = styled.select`
    margin: 4px;
`;

class Rating extends React.Component {
    getRatingOptions = () => {
        const options = [];
        for (let i = 1; i <= 10; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    }

    handleRatingChange = (value) => {
        value > 0 ? rateMovie(this.props.movieId, value) : deleteRating(this.props.movieId);
    }

    render() {
        return (
            <RatingWrapper>
                Your rating
                <RatingSelect value={this.props.rating} onChange={(e) => this.handleRatingChange(e.target.value)}>
                    <option key="0" value={0}>-</option>
                    {this.getRatingOptions()}
                </RatingSelect>
            </RatingWrapper>
        );
    }
}

export default Rating;