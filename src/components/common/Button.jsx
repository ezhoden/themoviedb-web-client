import styled from 'styled-components';

const Button = styled.button`
    padding: 16px;
    color: white;
    outline: none;
    font-size: ${({ theme }) => theme.defaultTextSize};
    border: ${({ theme }) => theme.defaultBorder};
    border-radius: ${({ theme }) => theme.defaultBorderRadius};
    background-color: ${({ disabled, theme }) => disabled ? theme.lightGray : theme.lightBlue};

    &:hover {
        background-color: ${({ disabled, theme }) => !disabled && theme.blue};
    }
`;

export default Button;