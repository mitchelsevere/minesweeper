import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

const StyledBoard = styled.div`
    background: #0f2949;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    box-shadow: 0 3px 15px rgba(200, 200, 200, 1);
    border-radius: 20px;
`;

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <StyledBoard>
                {this.props.board.grid.map((gridrow, topIdx) => {
                    return gridrow.map((tile, idx) => {
                        return (
                            <Tile
                                key={idx}
                                tile={tile}
                                updateGame={this.props.updateGame}
                            />
                        );
                    });
                })}
            </StyledBoard>
        );
    }
}

export default Board;
