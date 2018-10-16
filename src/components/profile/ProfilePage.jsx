import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestDetails } from '../../actions/apiActions';

const ProfilePageWrapper = styled.div`
    background-color: ${({ theme }) => theme.altGray};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const mapStateToProps = ({ profile }) => ({
    profile
});

const mapDispatchToProps = (dispatch) => ({
    // requestDetails: bindActionCreators(requestDetails, dispatch)
});

class ProfilePage extends React.Component {
    

    render() {
        return (
            <ProfilePageWrapper>
                <div>{this.props.profile.username}</div>
            </ProfilePageWrapper>
        )
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProfilePage);