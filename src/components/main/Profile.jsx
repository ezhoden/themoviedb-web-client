import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MenuItem from '../common/MenuItem';

const ProfileWrapper = styled.div`
    
`;

const ProfileLink = styled(Link)`
    text-decoration: none;
`;

export const Profile = ({ profile }) => (
    <ProfileWrapper>
        <ProfileLink to="/profile">
            <MenuItem>{profile && profile.username}</MenuItem>
        </ProfileLink>
        <MenuItem>Log Out</MenuItem>
    </ProfileWrapper>
);

export default Profile;