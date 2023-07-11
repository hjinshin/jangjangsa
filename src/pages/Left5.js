import React, {useState} from "react";

function Left5({handleInputChange, checkboxes, setCheckboxes}) {
    function OnChange(e) {
        const { id, value } = e.target;
        handleInputChange(id, value);
    };


    function handleCheckboxChange(id) {
        const updatedCheckboxes = checkboxes.map((checkbox) => {
            if (checkbox.id === id) {
              return { ...checkbox, checked: !checkbox.checked };
            }
            return checkbox;
        });
      
        setCheckboxes(updatedCheckboxes);
    };

    const [isToggleOn, setIsToggleOn] = useState(false);
    
    function handleClick() {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <div>
                <span>10. 지체상금율 1일 </span>
                <p onClick={handleClick} style={{cursor: "pointer", color: "blue", fontSize: "8px", display: "inline"}}>{isToggleOn ? " *해석닫기 " : " *해석보기 "}</p>
                <input style={{width: "50px"}} type="number" id="rate" onChange={OnChange} />
                <span> %</span>                
            </div>
            <div>
                {isToggleOn && 
                    <div style={{background: "#d0e3ed"}}>
                        <p style={{fontSize: "24px", fontWeight: "bold"}}>“지체상금율 선정 기준”</p>
                        <p>프로젝트 마감일로부터 업무의 지체된 일 수만큼, 지정합니다. </p>
                        <p>국가계약법 시행수칙 75조에 따르면 용역에 따른 지체상금율은 계약금의 0.125%입니다. </p>
                    </div>}
            </div>
            <p style={{fontSize: "24px", fontWeight: "bold"}}>제작물의 제작</p>
            <div>
                <span>11. 제작된 영상물의 수정 요청 가능 횟수는 몇 번입니까? </span>
                <input style={{width: "50px"}} type="number" id="revision" onChange={OnChange} /><span> 번</span>
            </div>
            <div>
                <span>12. 제작할 영상물이 총 몇 개입니까? </span>
                <input style={{width: "50px"}} type="number" id="count" onChange={OnChange} /><span> 개</span>
            </div>
            <div>
                <span>13. 제작할 영상물들의 총 재생시간을 얼마입니까? </span>
                <input style={{width: "50px"}} type="number" id="min" onChange={OnChange} /><span> 분</span>
            </div>     
            <div>
                <p>14. 제작할 영상물들의 총 제작방식은 무엇입니까?(복수선택 가능)</p>
                {checkboxes.map((checkbox) => (
                    <label key={checkbox.id}>
                    <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    {checkbox.label}
                    </label>
                ))}
            </div>       
        </div>
    );
}

export default Left5;