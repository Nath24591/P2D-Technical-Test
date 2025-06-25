import * as React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Header } from './components/Header';
import { Canvas } from './components/Canvas';
import { Footer } from './components/Footer';
import styled from 'styled-components';
import { Game } from './scripts/engine/Game';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-areas:
        'header'
        'canvas'
        'footer';
    grid-template-rows: 1fr 7fr 1fr;
    grid-template-columns: 0fr, 1fr, 0fr;
`;

function main(): void {
    createRoot(document.getElementById('root')).render(
        <Container>
            <Header />
            <Canvas game={new Game()} />
            <Footer />
        </Container>
    );
}

window.addEventListener('load', main, false);
