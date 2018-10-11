import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardLinkWrapper = styled(Link)`
    margin: 16px;
    text-decoration: none;
    cursor: default;
    color: ${({ theme }) => theme.black};
`;

export default CardLinkWrapper;