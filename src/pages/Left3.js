import React, {useState} from "react";
import styled from "styled-components";

const InputBox = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
`
function Left3({handleInputChange}) {
    function OnChange(e) {
        const { id, value } = e.target;
        handleInputChange(id, value);
    };

    const [isToggleOn, setIsToggleOn] = useState(false);
    
    function handleClick() {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <div style={{ width: '80%'}}>
                <p style={{ display: "inline" }}>6. 계약금액 </p>
                <p onClick={handleClick} style={{cursor: "pointer", color: "blue", fontSize: "8px", display: "inline"}}>{isToggleOn ? " *해석닫기" : " *해석보기"}</p>
                <InputBox type="number" id="payment" value={0} onChange={OnChange} />
            </div>
            <div style={{ width: '80%'}}>
                <p>①계약금</p>
                <InputBox type="number" id="dawn" value={0} onChange={OnChange} />
            </div>
            <div style={{ width: '80%'}}>
                <p>②중도금</p>
                <InputBox type="number" id="interim" value={0} onChange={OnChange} />
            </div>
            <div style={{ width: '80%'}}>
                <p>③잔금</p>
                <InputBox type="number" id="balance" value={0} onChange={OnChange} />
            </div>
            <div>
                {isToggleOn && 
                    <div style={{background: "#d0e3ed"}}>
                        <p style={{fontSize: "24px", fontWeight: "bold"}}>“선금 받고 업무를 시작하세요!”</p>
                        <p>2회 이상에 걸처 비용을 나눠 받는 경우, 계약금은 30%-50% 정도로 선금을 받고 작업을 시작하는 편이 좋습니다.</p>
                    </div>}
            </div>
        </div>
    );
}

export default Left3;