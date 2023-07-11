import React, {useState} from "react";
import styled from "styled-components";

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioOption = styled.label`
  margin-bottom: 10px;
`;

const InputBox = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
`

function Left4({handleInputChange, selectedRadioOption, onOptionChange}) {
    function OnChange(e) {
        const { id, value } = e.target;
        handleInputChange(id, value);
    };

    const handleRadioChange = (e) => {
        const option = e.target.value;
        onOptionChange(option);
    };

    const [isToggleOn, setIsToggleOn] = useState(false);
    
    function handleClick() {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <p style={{ display: "inline" }}>7. 세금은 어떻게 처리하나요?</p>
            <p onClick={handleClick} style={{cursor: "pointer", color: "blue", fontSize: "8px", display: "inline"}}>{isToggleOn ? " *해석닫기" : " *해석보기"}</p>
            <RadioContainer>
                <RadioOption>
                    <input
                        type="radio"
                        id="원천징수 3.3% 포함"
                        value="원천징수 3.3% 포함"
                        checked={selectedRadioOption === "원천징수 3.3% 포함"}
                        onChange={handleRadioChange}
                    />
                    원천징수 3.3% 포함
                </RadioOption>
                <RadioOption>
                    <input
                        type="radio"
                        id="부가세 별도"
                        value="부가세 별도"
                        checked={selectedRadioOption === "부가세 별도"}
                        onChange={handleRadioChange}
                    />
                    부가세 별도
                </RadioOption>
                <RadioOption>
                    <input
                        type="radio"
                        id="부가세 포함"
                        value="부가세 포함"
                        checked={selectedRadioOption === "부가세 포함"}
                        onChange={handleRadioChange}
                    />
                    부가세 포함
                </RadioOption>
            </RadioContainer>
            <div>
                {isToggleOn && 
                    <div style={{background: "#d0e3ed"}}>
                        <p style={{fontSize: "24px", fontWeight: "bold"}}>“프리랜서 부가세란?”</p>
                        <p> 부가가치 세법상 프리랜서는 면세 사업자이지만, 건출물 등의 사업설비를 갖추고 있는 경우 또는 작업자를 고용하여 노동력을 공급하는 경우 부가세 납부의무자에 해당됩니다.  </p>
                    </div>}
            </div>
            <div style={{ width: '80%'}}>
                <p>8. 지급기한과 조건</p>
                <InputBox type="text" id="condition" placeholder="ex) 최종결과물 승인일로부터 7일이내" onChange={OnChange} />
            </div>
            <div>
                <p>9. 대금을 지급 받을 계좌는 무엇입니까?</p>
                <input style={{width: "50px"}} type="text" id="bank" placeholder="은행명" onChange={OnChange} />
                <span>은행 </span>
                <input style={{width: "100px"}} type="text" id="accountNum" placeholder="계좌번호" onChange={OnChange} />
                <input style={{width: "80px"}} type="text" id="name" placeholder="예금주" onChange={OnChange} />
            </div>
            
        </div>
    );
}

export default Left4;