import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
`

function Left2({handleInputChange}) {
    function OnChange(e) {
        const { id, value } = e.target;
        handleInputChange(id, value);
    };

    return (
        <div>
            <p style={{fontSize: "24px", fontWeight: "bold"}}>프로젝트 기간</p>
            <div style={{ width: '80%'}}>
                <p>3. 시작일</p>
                <InputBox type="date" id="start" onChange={OnChange} />
            </div>
            <div style={{ width: '80%'}}>
                <p>4. 중간보고일</p>
                <InputBox type="date" id="mid" onChange={OnChange} />
            </div>
            <div style={{ width: '80%'}}>
                <p>5. 최종일</p>
                <InputBox type="date" id="end" onChange={OnChange} />
            </div>
        </div>
    );
}

export default Left2;