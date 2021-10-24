import React from "react";
import Cell from './cell';
import './style.css';

const Board = ({player, callback}) => {

    return (
        <div className={"board"}>
            <Cell cellID={"cell1"} player={player}/>
            <Cell cellID={"cell2"} player={player}/>
            <Cell cellID={"cell3"} player={player}/>
            <Cell cellID={"cell4"} player={player}/>
            <Cell cellID={"cell5"} player={player}/>
            <Cell cellID={"cell6"} player={player}/>
            <Cell cellID={"cell7"} player={player}/>
            <Cell cellID={"cell8"} player={player}/>
            <Cell cellID={"cell9"} player={player}/>
        </div>
    );
}

export default Board;