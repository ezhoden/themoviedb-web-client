import React from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { connect } from 'react-redux';

import Auth from './Auth';
import { requestProfile } from '../../actions/apiActions';
import { bindActionCreators } from 'redux';
import Profile from './Profile';
import MenuItem from '../common/MenuItem';

const AuthMenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.darkGray};
    height: 48px;
`;

const mapStateToProps = ({ profile }) => ({
    profile
});

const mapDispatchToProps = (dispatch) => ({
    requestProfile: bindActionCreators(requestProfile, dispatch)
});

class AuthMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isAuthModalOpen: false
        };
    }

    componentWillMount() {
        sessionStorage.getItem('sessionId') && this.props.requestProfile();
    }

    handleModalVisibility = (isAuthModalOpen) => {
        this.setState({ isAuthModalOpen });
    }
    
    render() {
        return (
            <AuthMenuWrapper>
                {
                    sessionStorage.getItem('sessionId') ?
                    <Profile profile={this.props.profile} /> :
                    <MenuItem onClick={() => this.handleModalVisibility(true)}>Log in</MenuItem>
                }
                <Modal 
                    isOpen={this.state.isAuthModalOpen && !this.props.profile} 
                    onBackgroundClick={() => this.handleModalVisibility(false)}>
                    <Auth />
                </Modal>
            </AuthMenuWrapper>
        );
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(AuthMenu);