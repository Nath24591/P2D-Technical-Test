import * as React from 'react';
import styled from 'styled-components';
import { colourPalette } from '../constants/colourPalette';

const Background = styled.div`
    grid-area: footer;
    padding: 3rem;
    background-color: ${colourPalette.grey};
`;

export const Footer = (): React.ReactNode => {
    return (
        <Background />
    );
}