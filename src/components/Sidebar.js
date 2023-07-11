import React from "react";
import styled from "styled-components";

const StyleSidebar = styled.div`
    width: 260px;
    flex-shrink: 0;
    box-sizing: border-box;
    border: 0 solid lightgray;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-right-width: 2px;
    flex-direction: column;
`

function Sidebar({page}) {
    return (
        <StyleSidebar>
           <p>현재페이지</p>
           <p> {'<'} {page} / 6 {'>'} </p> 
        </StyleSidebar>
    );
}

export default Sidebar;