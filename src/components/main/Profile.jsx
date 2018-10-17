import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuItem from '../common/MenuItem';
import { deleteSession } from '../../utils/sessionUtils';
import { removeProfile } from '../../actions/apiActions';

const ProfileWrapper = styled.div`
    
`;

const ProfileLink = styled(Link)`
    text-decoration: none;
`;

const mapDispatchToProps = (dispatch) => ({
    removeProfile: bindActionCreators(removeProfile, dispatch)
});

class Profile extends React.Component {
    logOut = () => {
        deleteSession();
        this.props.removeProfile();
    }

    render() {
        const { profile } = this.props;
        return (
            <ProfileWrapper>
                <ProfileLink to="/profile">
                    <MenuItem>{profile && profile.username}</MenuItem>
                </ProfileLink>
                <MenuItem onClick={this.logOut}>Log Out</MenuItem>
            </ProfileWrapper >
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Profile);