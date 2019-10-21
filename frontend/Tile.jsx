import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
    background: #507a90;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin: 2px;
`;

class Tile extends React.Component {
    render() {
        return <StyledTile></StyledTile>;
    }
}

export default Tile;
