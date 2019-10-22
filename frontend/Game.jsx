import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./Board";

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            board: new Minesweeper.Board(9, 9)
        };
        this.updateGame = this.updateGame.bind(this);
    }
    updateGame(tile, flagged) {
        flagged ? tile.toggleFlag() : tile.explore();
        this.setState(() => ({
            board: this.state.board
        }));
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
