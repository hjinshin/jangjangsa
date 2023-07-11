import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 60px;
    border: 0 solid lightgray;
    display: flex;
    align-items: center;
    padding: 1.25rem;
    border-bottom-width: 2px;
    box-sizing: border-box;
    justify-content: space-between;
`
function Header() {
    return (
        <StyledHeader>
           <p>This is Header</p> 
        </StyledHeader>
    );
}

export default Header;