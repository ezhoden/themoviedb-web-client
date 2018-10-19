import React from 'react';
import styled from 'styled-components';

const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: 8px;
`;

const RatingSelect = styled.select`
    margin: 4px;
`;

class Rating extends React.Component {
    getRatingOptions = () => {
        const options = [];
        for (let i = 1; i <= 10; i++) {
            this.props.rating && this.props.rating == i && options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    }

    render() {
        return (
            <RatingWrapper>
                Your rating
                <RatingSelect value={this.props.rating}>
                    <option key="0">-</option>
                    {this.getRatingOptions()}
                </RatingSelect>
            </RatingWrapper>
        );
    }
}

export default Rating;