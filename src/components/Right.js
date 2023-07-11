import React from "react";
import styled from "styled-components";

import Right1 from "../pages/Right1"

const StyledRight = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 0 solid lightgray;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
    display: grid;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 0; /* Chrome용 스크롤바 너비 설정 */
        height: 0; /* Chrome용 스크롤바 높이 설정 */
      }

`

function Right({data, selectedRadioOption, selectedItems}) {
    return (
        <StyledRight>
           <Right1 data={data} selectedRadioOption={selectedRadioOption} selectedItems={selectedItems} />
        </StyledRight>
    );
}

export default Right;