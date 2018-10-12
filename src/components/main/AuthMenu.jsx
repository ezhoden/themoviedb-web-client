import React from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { connect } from 'react-redux';

import Auth from './Auth';
import Text from '../common/Text';

const AuthMenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.darkGray};
    height: 48px;
`;

const LogIn = styled(Text)`
    padding: 16px;
    color: white;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Profile = styled(Text)`
    padding: 16px;
    color: white;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const mapStateToProps = ({ auth }) => ({
    auth
});

const mapDispatchToProps = (dispatch) => ({
    
});

class AuthMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.handleModalVisibility = this.handleModalVisibility.bind(this)
    }

    handleModalVisibility() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <AuthMenuWrapper>
                {
                    this.props.auth.sessionId ?
                    <Profile>{}</Profile> :
                    <LogIn onClick={this.handleModalVisibility}>Log in</LogIn>
                }
                <Modal isOpen={this.state.isOpen} onBackgroundClick={this.handleModalVisibility}>
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