import React, { useState } from "react";
import styled from "styled-components";

import Left from "../components/Left"
import Right from "../components/Right"


const StyledCenter = styled.div`
    flex-grow: 1;
    dispaly: flex;
    flex-direction: column;
`

const ContentsContainer = styled.div`
    display: flex;
    height: 100%;
`

function Center({handlePageChange}) {
    const [pname, setPname] = useState("");
    const [cname, setCname] = useState("");

    const [start, setStart] = useState("");
    const [mid, setMid] = useState("");
    const [end, setEnd] = useState("");

    const [payment, setPayment] = useState(0);
    const [dawn, setDawn] = useState(0);
    const [interim, setInterim] = useState(0);
    const [balance, setBalance] = useState(0);

    const [condition, setCondition] = useState("");
    const [bank, setBank] = useState("");
    const [accountNum, setAccountNum] = useState("");
    const [name, setName] = useState("");

    const [rate, setRate] = useState(0);
    const [revision, setRevision] = useState(0);
    const [count, setCount] = useState(0);
    const [min, setMin] = useState(0);

    const [format, setFormat] = useState("");
    const [resolution, setResolution] = useState("");
    const [frame, setFrame] = useState("");
    const [etc, setEtc] = useState("");
    const [range, setRange] = useState("");
    const [client, setClient] = useState("");
    const [producer, setProducer] = useState("");

    const data = {pname, cname, start, mid, end, payment, dawn, interim, balance, condition, bank, accountNum, name, rate, revision, count, min, format, resolution, frame, etc, range, client, producer};

    const [selectedRadioOption, setSelectedRadioOption] = useState("");
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: "기획", checked: false },
        { id: 2, label: "촬영", checked: false },
        { id: 3, label: "편집", checked: false },
        { id: 4, label: "색보정", checked: false },
        { id: 5, label: "모션그래픽", checked: false },
        { id: 6, label: "기타", checked: false },
      ]);

    const handleOptionChange = (option) => {
        setSelectedRadioOption(option);
    };
    const selectedItems = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.label)
      .join(", ");;

    function handleInputChange(id, value) {
        if (id === "pname")         setPname(value);
        else if (id === "cname")    setCname(value);
        else if(id === "start")     setStart(value);
        else if(id === "mid")       setMid(value);
        else if(id === "end")       setEnd(value);
        else if(id === "payment")   setPayment(value);
        else if(id === "dawn")      setDawn(value);
        else if(id === "interim")   setInterim(value);
        else if(id === "balance")   setBalance(value);
        else if(id === "condition") setCondition(value);
        else if(id === "bank")      setBank(value);
        else if(id === "accountNum") setAccountNum(value);
        else if(id === "name")      setName(value);
        else if(id === "rate")      setRate(value);
        else if(id === "revision")  setRevision(value);
        else if(id === "count")     setCount(value);
        else if(id === "min")       setMin(value);
        else if(id === "format")    setFormat(value);
        else if(id === "resolution") setResolution(value);
        else if(id === "frame")     setFrame(value);
        else if(id === "etc")       setEtc(value);
        else if(id === "range")     setRange(value);
        else if(id === "client")    setClient(value);
        else if(id === "producer")  setProducer(value);
       };

    return (
    <StyledCenter>
        <ContentsContainer>
            {<Left handleInputChange={handleInputChange} handlePageChange={handlePageChange}
                selectedRadioOption={selectedRadioOption} onOptionChange={handleOptionChange} 
                checkboxes={checkboxes} setCheckboxes={setCheckboxes} />}
            {<Right data={data} selectedRadioOption={selectedRadioOption} selectedItems={selectedItems} />}
        </ContentsContainer>
    </StyledCenter>
    );
}

export default Center;