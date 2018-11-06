import React from 'react';
import styled from 'styled-components';
import { rateMovie, deleteRating } from '../../services/api';
import { getSessionId } from '../../utils/sessionUtils';

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
        if (getSessionId()) {
            value > 0 ? rateMovie(this.props.movieId, value) : deleteRating(this.props.movieId);
        } else {
            alert('Authorization required');
        }
    }

    render() {
        return (
            <RatingWrapper>
                <RatingSelect value={this.props.rating} onChange={(e) => this.handleRatingChange(e.target.value)}>
                    <option key="0" value={0}>-</option>
                    {this.getRatingOptions()}
                </RatingSelect>
            </RatingWrapper>
        );
    }
}

export default Rating;