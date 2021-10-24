import React from "react";
import './style.css';

const Cell = ({XO, cellID, clickOnCell}) => {
    return <div className={"cell "+ XO} id={cellID} onClick={()=>clickOnCell(cellID)}>{XO}</div>
}

export default Cell;
