import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
`

function Left6({handleInputChange}) {
    function OnChange(e) {
        const { id, value } = e.target;
        handleInputChange(id, value);
    };

    return (
        <div>
            <div>
                <p>15. 제작물 형식</p>
                <div><span>①영상의 포맷: </span><input style={{width: "80px"}} type="text" id="format" onChange={OnChange} /></div>
                <div><span>②해상도: </span><input style={{width: "80px"}} type="text" id="resolution" onChange={OnChange} /></div>
                <div><span>③프레임: </span><input style={{width: "80px"}} type="text" id="frame" onChange={OnChange} /></div>
                <div><span>④기타: </span><input style={{width: "80px"}} type="text" id="etc" onChange={OnChange} /></div>
            </div>  
            <div style={{width: "80%"}}>
                <p>16. 제작물의 유통범위</p>
                <InputBox type="text" id="range" placeholder="ex) 유투브 ‘장장사’ 채널" onChange={OnChange} />
            </div>
            <div>
                <p>17. 원사업자 및 수급사업자</p>
                <div>
                    <span>클라이언트 회사.상호.이름: </span>
                    <input style={{width: "80px"}} type="text" id="client" onChange={OnChange} />                    
                </div>
                <div>
                    <span>제작자 회사.상호.이름: </span>
                    <input style={{width: "80px"}} type="text" id="producer" onChange={OnChange} />                    
                </div>
            </div>
        </div>
    );
}

export default Left6;