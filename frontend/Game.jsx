import React from "react";
import styled from "styled-components";
import * as Minesweeper from "../minesweeper";
import Board from "./Board";

const StyledGame = styled.div`
    h1 {
        font-size: 24px;
        color: #1a1a1a;
        font-family: "Helvetica", sans-serif;
        text-align: center;
    }
`;

const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: #0f2949;
    color: #fff;
    font-family: "Anton", sans-serif;
    border-radius: 10px;
    margin-bottom: 41px;
    transition: 300ms all ease-in;
    h3 {
        letter-spacing: 1px;
        font-size: 2.5rem;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        width: 50%;
        height: 40%;
    }
`;

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            board: new Minesweeper.Board(9, 9),
            isModalOpen: false,
            status: "Game in Progress"
        };
        this.updateGame = this.updateGame.bind(this);
        this.checkGame = this.checkGame.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    updateGame(tile, flagged, rightClick) {
        if (tile.explored) return null;
        if (rightClick) tile.toggleFlag();
        if (!flagged && !rightClick) tile.explore();
        this.setState(() => ({
            board: this.state.board
        }));
        this.checkGame();
    }
    checkGame() {
        const lost = this.state.board.lost();
        const won = this.state.board.won();

        if (lost) {
            this.openModal("You Lost.");
        }

        if (won) {
            this.openModal("You Win!");
        }
    }
    openModal(status) {
        this.setState(() => ({
            isModalOpen: true,
            status
        }));
    }
    render() {
        return (
            <StyledGame>
                <Modal>
                    <h3>{this.state.status}</h3>
                </Modal>
                <Board board={this.state.board} updateGame={this.updateGame} />
            </StyledGame>
        );
    }
}

export default Game;
