import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

const StyledBoard = styled.div`
    background: #0f2949;
    width: 500px;
    height: 500px;
`;

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <StyledBoard>
                <Tile updateGame={this.props.updateGame} />
            </StyledBoard>
        );
    }
}

export default Board;
