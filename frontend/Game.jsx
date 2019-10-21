import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./Board";

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            board: new Minesweeper.Board()
        };
        this.updateGame = this.updateGame.bind(this);
    }
    updateGame() {
        return "updateGame";
    }
    render() {
        return (
            <Board
                board={this.state.board}
                updateGame={this.updateGame}
            ></Board>
        );
    }
}

export default Game;
