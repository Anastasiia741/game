import React from 'react';
import '../game.css';

const Gameblock = (props) => {

    return (
        <div className={`${props.isresult} game-block`} onClick={props.check}>
            <div>
                <div>{props.name}</div>
            </div>
        </div>
    )
}

export default Gameblock;