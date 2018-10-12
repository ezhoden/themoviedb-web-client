import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../common/Input';
import Button from '../common/Button';
import { requestAuth } from '../../actions/apiActions';

const AuthWrapper = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.altGray};
`;

const AuthInput = styled(Input)`
    width: 250px;
`;

const mapDispatchToProps = (dispatch) => ({
    requestAuth: bindActionCreators(requestAuth, dispatch)
});

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            submitDisabled: true
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, this.handleButtonDisability);
    }

    handleRequestAuth = () => {
        const { login, password } = this.state;
        this.props.requestAuth(login, password);
    }
        

    handleButtonDisability = () => {
        const { login, password } = this.state;
        this.setState({ submitDisabled: login.length === 0 || password.length === 0 })
    }
    

    render() {
        return (
            <AuthWrapper>
                <AuthInput name="login" placeholder="Login" onChange={this.handleInputChange} />
                <AuthInput 
                    name="password" 
                    placeholder="Password" 
                    onChange={this.handleInputChange}
                    type="password" />
                <Button onClick={this.handleRequestAuth} disabled={this.state.submitDisabled} >Log in</Button>
            </AuthWrapper>
        );
    }
}


export default connect(
    null, 
    mapDispatchToProps
)(Auth);