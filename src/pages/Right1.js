import React from "react";

function Right1({data, selectedRadioOption, selectedItems}) {

    return (
        <div>
            <p style={{fontSize: "24px", fontWeight: "bold", textAlign: "center"}}>영상 제작 계약서</p>
            <p>★프로젝트명: {data.pname} </p> 
            <p>★콘텐츠명: {data.cname} </p>
            <p>★프로젝트 시작일: {data.start} </p>
            <p>★중간 결과물 보고일: {data.mid} </p>
            <p>★프로젝트 종료일: {data.end} </p>
            <p>★계약금액: {data.paymeny} ￦ </p>
            <p>★계약금: {data.dawn} ￦ ({selectedRadioOption})</p>
            <p>★중도금: {data.interim} ￦ </p>
            <p>★잔금: {data.balance} ￦ </p>
            <p>★지급기한과 조건: {data.condition}</p>
            <p>★계좌번호: {data.bank} 은행 {data.accountNum}, 예금주:{data.name}</p>
            <p>★지체상금율: 1일 {data.rate} %</p>
            <p>★제작물의 제작 (추가 수정가능 횟수: {data.revision})</p>
            <p> - 제작할 제작물의 개수: {data.count} </p>
            <p> - 제작물의 재생시간: {data.min} 분</p>
            <p>★제작물의 제작 방식: {selectedItems} </p>
            <p>★제작물의 형식</p>
            <p> - 영상 포맷: {data.format}</p>
            <p> - 영상 해상도: {data.resolution}</p>
            <p> - 영상 프레임: {data.frame}</p>
            <p> - 기타: {data.etc}</p>
            <p>★제작물의 유통범위: {data.range}</p>
            <p> </p>
            <p style={{color: "red"}}>* 빨간색으로 표시된 것은 직접 대면해서 자필로 작성 </p>
            <span>상기의 영상 개발 위탁업무에 대하여 </span>
            <span style={{color: "red"}}>원사업자_________(이하 ‘수요자’라 칭함.) 와 수급사업자       (이하 ‘공급자’라 칭함.) </span>
            <span>는(은) 이 기본계약서에 의하여 계약을 체결하고 신의에 따라 성실히 계약상의 의무를 이행할 것을 확약하며, 이 기본계약의 증거로서 계약서를 작성하여 당사자가 기명날인한 후 각각 1부씩 보관한다.</span>
            <p style={{color: "red", textAlign: "right"}}>년 {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}월 {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}일</p>


        </div>
        
    );
}

export default Right1;