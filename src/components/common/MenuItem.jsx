import styled from 'styled-components';

import Text from "./Text";

const MenuItem = styled(Text)`
    padding: 16px;
    color: white;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export default MenuItem;