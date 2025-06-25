import * as React from 'react';
import styled from 'styled-components';
import { colourPalette } from '../constants/colourPalette';

const Background = styled.div`
    grid-area: header;
    padding: 3rem;
    background-color: ${colourPalette.wrenGreen};
    color: ${colourPalette.white};
`;

const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: xxx-large; 
    color: ${colourPalette.white};
`

export const Header = (): React.ReactNode => {
    return (
        <Background>
            <Title>Wren Technical Test</Title>
        </Background>
    );
}