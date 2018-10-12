import styled from 'styled-components';

const Input = styled.input`
    margin: 16px;
    padding: 12px;
    font-size: ${({ theme }) => theme.defaultTextSize};
    border: ${({ theme }) => theme.defaultBorder};
    border-radius: ${({ theme }) => theme.defaultBorderRadius};
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.lightBlue};
    }
`;

export default Input;