import React from "react";
import './style.css';
import Cell from "./cell";

let history = [];

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nextPlayer: "X",
            winner: "",
            cell1: "",
            cell2: "",
            cell3: "",
            cell4: "",
            cell5: "",
            cell6: "",
            cell7: "",
            cell8: "",
            cell9: ""
        }

    }

    handleMove = (cell) => {
        if (this.state.winner) return;
        let currentPlayer = this.state.nextPlayer;
        if (this.state[cell] === "") {
            this.setState({[cell]: currentPlayer}, this.checkWinner);
            console.log(this.state[cell]);
            // this.checkWinner();
            let nextPlayer = currentPlayer === "X" ? "O" : "X";
            this.setState({nextPlayer: nextPlayer})
        }
        history.push(this.state);
        const btn = document.createElement("input");
        btn.type = "button";
        btn.value = history.length === 1 ? `Go to start` : `Go to move #${history.length - 1}`;
        btn.id = history.length - 1 + '';
        // btn.onclick = this.goToMove(btn.id);
        btn.onclick = () => this.goToMove(btn.id);
        document.querySelector(".history").appendChild(btn);
        console.log(history);

    }

    checkWinner = () => {
        let line = [];

        line[0] = this.state.cell1 + this.state.cell2 + this.state.cell3;
        line[1] = this.state.cell4 + this.state.cell5 + this.state.cell6;
        line[2] = this.state.cell7 + this.state.cell8 + this.state.cell9;
        line[3] = this.state.cell1 + this.state.cell4 + this.state.cell7;
        line[4] = this.state.cell2 + this.state.cell5 + this.state.cell8;
        line[5] = this.state.cell3 + this.state.cell6 + this.state.cell9;
        line[6] = this.state.cell1 + this.state.cell5 + this.state.cell9;
        line[7] = this.state.cell7 + this.state.cell5 + this.state.cell3;

        for (let i = 0; i < 8; i++) {
            this.checkLine(line[i]);
        }
    }

    checkLine = (line) => {
        switch (line) {
            case "XXX":
                this.setState({winner: "Player X"});
                document.querySelector(".nextOrWinner").innerHTML = "Player X Won";
                break;
            case "OOO":
                this.setState({winner: "Player O"});
                document.querySelector(".nextOrWinner").innerHTML = "Player O Won";
                break;
            default:
                return;

        }
    }

    goToMove = (move) => {
        move = parseInt(move);
        this.setState(history[move]);
        let currentStep = history.length;
        history = history.slice(0, move);
        this.removeButtons(currentStep - move);
    }

    removeButtons = (n) => {
        const history = document.querySelector(".history");
        for (let i = 1; i <= n; i++) {
            history.removeChild(history.lastChild)
        }
    }

    render() {
        return (
            <>
                <h1>TIC TAC TOE</h1>
                <div className={"container"}>
                    <div className={"history"}>
                        <h2>History</h2>
                    </div>
                    {/*<Board callback={this.handleMove} player={this.state.currentPlayer}/>*/}
                    <div className={"board"}>
                        <Cell cellID={"cell1"} XO={this.state.cell1}
                              clickOnCell={this.handleMove}/>
                        <Cell cellID={"cell2"} XO={this.state.cell2}
                              clickOnCell={this.handleMove}/>
                        <Cell cellID={"cell3"} XO={this.state.cell3}
                              clickOnCell={this.handleMove}/>
                        <Cell cellID={"cell4"} XO={this.state.cell4}
                              clickOnCell={this.handleMove}/>
                        <Cell cellID={"cell5"} XO={this.state.cell5}
                              clickOnCell={this.handleMove}/>
                        <Cell cellID={"cell6"} XO={this.state.cell6}
                              clickOnCell={this.handleMove}/>
                        <Cell cellID={"cell7"} XO={this.state.cell7}
                              clickOnCell={this.handleMove}/>
                        <Cell cellID={"cell8"} XO={this.state.cell8}
                              clickOnCell={this.handleMove}/>
                        <Cell cellID={"cell9"} XO={this.state.cell9}
                              clickOnCell={this.handleMove}/>
                    </div>
                    <h2 className={"nextOrWinner"}>Next Player: {this.state.nextPlayer}</h2>
                </div>
            </>
        );
    }
}

export default Game;