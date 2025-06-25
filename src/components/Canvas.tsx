import * as React from 'react';
import { Game } from '../scripts/engine/Game';

export const Canvas = (props: { game: Game }): React.ReactNode => {
    React.useEffect(() => {
        props.game.init();

    }, []);

    return (
        <canvas id='canvas' height='750px' width='1500px' style={{border: 'solid 2px grey', justifySelf: 'center'}}/>
    );
}
