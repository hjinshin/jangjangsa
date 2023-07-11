import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    weidth: 100%;
    border: 0 solid lightgray;
    align-items: center;
    padding: 1.25rem;
    border-top-width: 2px;
    box-sizing: border-box;
    justify-content: space-between;
`

function Footer() {
    return (
        <StyledFooter>
           <p>This is Footer</p> 
        </StyledFooter>
    );
}

export default Footer;