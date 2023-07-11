import React, { useState } from "react";
import styled from "styled-components";

import Left1 from "../pages/Left1"
import Left2 from "../pages/Left2"
import Left3 from "../pages/Left3"
import Left4 from "../pages/Left4"
import Left5 from "../pages/Left5"
import Left6 from "../pages/Left6"

const StyledLeft = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 0 solid lightgray;
    border-right-width: 2px;
    padding-top: 2.5rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 30%;
    position: relative;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 0; /* Chrome용 스크롤바 너비 설정 */
        height: 0; /* Chrome용 스크롤바 높이 설정 */
      }
`

const StyledButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    width: 100px;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem;
    margin: 2%;
    background: #228be6;
    &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
    }
`

function Left({handleInputChange, handlePageChange, selectedRadioOption, onOptionChange, checkboxes, setCheckboxes}) {

    const pages = [
        {id: "left1", component: <Left1 handleInputChange={handleInputChange} />},
        {id: "left2", component: <Left2 handleInputChange={handleInputChange} />},
        {id: "left3", component: <Left3 handleInputChange={handleInputChange} />},
        {id: "left4", component: <Left4 handleInputChange={handleInputChange} selectedRadioOption={selectedRadioOption} onOptionChange={onOptionChange} />},
        {id: "left5", component: <Left5 handleInputChange={handleInputChange} checkboxes={checkboxes} setCheckboxes={setCheckboxes} />},
        {id: "left6", component: <Left6 handleInputChange={handleInputChange} />},
    ];

    const [currentPageIndex, setCurrentPageIndex] = useState(0);


    function handleNextPage() {
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
            handlePageChange(1);
        }
      };

      function handlePreviousPage() {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
            handlePageChange(-1);
        }
      };

      function renderPage() {
        return pages[currentPageIndex].component;
      };

    return (
        <StyledLeft>
             <div style={{ height: "100%", overflow: "auto" }}>
                <div style={{ paddingBottom: "3rem" }}>{renderPage()}</div>
            </div>
            <div style={{ marginTop: "auto" }}>
                <StyledButtonContainer>
                    <StyledButton onClick={handlePreviousPage}>← 이전</StyledButton>
                    <StyledButton onClick={handleNextPage}>다음 →</StyledButton>
                </StyledButtonContainer>                
            </div>
        </StyledLeft>
    );
}

export default Left;