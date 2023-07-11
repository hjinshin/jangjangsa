import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
`

function Left1({handleInputChange}) {
    function OnChange(e) {
        const { id, value } = e.target;
        handleInputChange(id, value);
    };

    return (
        <div>
            <div style={{ width: '80%'}}>
                <p>1. 프로젝트명</p>
                <InputBox type="text" id="pname" onChange={OnChange} />
            </div>
            <div style={{ width: '80%'}}>
                <p>2. 콘텐츠명</p>
                <InputBox type="text" id="cname" onChange={OnChange} />
            </div>
        </div>
    );
}  

export default Left1;